import { commitMutation, graphql } from 'react-relay'
import { BLUE } from './../../ui'
import { createPollFragmentContainer } from 'fragments/Poll'
import 'pollview.scss'
import { pluralise } from 'helpers/pluralize'
import moment from 'moment'
import createEnvironment from 'relay-environment'
import { withViewer } from 'lib/withViewer'
import notification from 'antd/lib/notification'

function voteMutation({ option }, hasViewer, config) {
  if (!hasViewer)
    return notification.error({
      message: 'Sorry',
      description: 'To ensure an honest platform, please login to vote 🙂',
      placement: 'bottomRight'
    })
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

function Choice(props) {
  const {
    choice: { title, vote_count, viewer_selected, _id },
    totalVotes,
    hide_votes,
    viewer_owns,
    hasViewer
  } = props

  const width =
    viewer_owns || !hide_votes
      ? ((vote_count / totalVotes) * 100).toFixed(2)
      : 100

  let className = 'choice s__dark__bg bd elevated'
  if (viewer_selected) className = `${className} active`

  return (
    <div
      className={className}
      onClick={e => voteMutation({ option: _id }, hasViewer)}
    >
      {(viewer_owns || !hide_votes) && (
        <div className="vote-meter s__image" style={{ width: `${width}%` }} />
      )}
      <div className="vote-text">
        {title} {vote_count && ` - ${vote_count}`}
      </div>
    </div>
  )
}

export function PollView({ discussion, hasViewer }) {
  const {
    poll,
    voting_has_ended,
    hide_votes,
    viewer_owns,
    vote_count,
    poll_closes_at
  } = discussion

  if (!poll) return null

  let totalVotes = 0
  if (viewer_owns || !hide_votes) {
    totalVotes = vote_count
  }

  function pollStatus() {
    if (voting_has_ended) return ' / Voting has ended'

    const time = moment(poll_closes_at * 1000)
    return ` / Closes ${time.fromNow()}`
  }

  return (
    <div className="pollview">
      {poll.edges.map(p => (
        <Choice
          hasViewer={hasViewer}
          key={p.node.id}
          choice={p.node}
          hide_votes={hide_votes}
          viewer_owns={viewer_owns}
          totalVotes={totalVotes}
        />
      ))}
      <div>
        {vote_count} {pluralise('vote', vote_count)} {pollStatus()}
      </div>
    </div>
  )
}

PollView = createPollFragmentContainer(withViewer(PollView))
