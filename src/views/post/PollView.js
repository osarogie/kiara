import { commitMutation, graphql } from 'react-relay'
import { BLUE } from './../../ui'
import { createPollFragmentContainer } from 'fragments/Poll'
import 'pollview.scss'
import { pluralise } from 'helpers/pluralize'
import moment from 'moment/min/moment.min'
import createEnvironment from 'relay-environment'
import { withViewer } from 'lib/withViewer'
import notification from 'antd/lib/notification'

function voteMutation({ option }, requireViewer, config) {
  if (!requireViewer('Please login to vote')) return
  const variables = {
    input: { option }
  }

  commitMutation(createEnvironment(), {
    variables,
    mutation: graphql`
      mutation PollViewVoteMutation($input: VoteInput!) {
        vote(input: $input) {
          discussion {
            ...PostListItem_discussion
          }
          success
          message
        }
      }
    `,
    ...config
  })
}

export function PollView({ discussion, hasViewer, requireViewer }) {
  const {
    poll,
    voting_has_ended,
    hide_votes,
    viewer_owns,
    vote_count,
    poll_closes_at,
    viewer_has_voted
  } = discussion

  if (!poll) return null

  let totalVotes = 0
  if (viewer_owns || !hide_votes) {
    totalVotes = vote_count
  }

  function Choice(props) {
    const {
      choice: { title, vote_count, viewer_selected, _id },
      totalVotes,
      hide_votes,
      viewer_owns,
      voting_has_ended,
      hasViewer
    } = props

    const width =
      viewer_owns || !hide_votes
        ? ((vote_count / totalVotes) * 100).toFixed(2)
        : 100

    let className = 'choice s__dark__bg bd'
    if (viewer_selected) className = `${className} active`
    if (!viewer_has_voted && !voting_has_ended)
      className = `${className} elevated`

    function countVote() {
      if (totalVotes < 200) return ''
      return vote_count
    }

    function onChoiceClick(option) {
      if (viewer_has_voted) return
      if (voting_has_ended)
        return notification.error({
          message: 'Sorry',
          description: 'Voting had ended',
          placement: 'bottomRight'
        })

      voteMutation({ option: _id }, requireViewer)
    }

    const perc =
      viewer_owns || !hide_votes ? `${countVote()} (${width}%)` : countVote()

    return (
      <div className={className} onClick={e => onChoiceClick(_id)}>
        {(viewer_owns || !hide_votes) && (
          <div className="vote-meter s__image" style={{ width: `${width}%` }} />
        )}
        <div className="vote-text">
          {voting_has_ended || viewer_has_voted || (
            <span className="radio s__content__main" />
          )}{' '}
          {title} {!!vote_count && ` - ${perc}`}
        </div>
      </div>
    )
  }

  function pollStatus() {
    if (viewer_has_voted) return 'You have voted'
    if (voting_has_ended) return 'Voting has ended'

    const time = moment(poll_closes_at * 1000)
    return `Closes ${time.fromNow()}`
  }

  function voteCount() {
    if (vote_count > 200)
      return `${vote_count} ${pluralise('vote', vote_count)} / `
    return ''
  }

  return (
    <div className="pollview">
      {poll.edges.map(p => (
        <Choice
          hasViewer={hasViewer}
          key={p.node.id}
          voting_has_ended={voting_has_ended}
          choice={p.node}
          hide_votes={hide_votes}
          viewer_owns={viewer_owns}
          totalVotes={totalVotes}
        />
      ))}
      <div>
        {voteCount()}
        {pollStatus()}
      </div>
    </div>
  )
}

PollView = createPollFragmentContainer(withViewer(PollView))
