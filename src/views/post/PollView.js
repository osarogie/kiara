import { commitMutation, graphql } from 'react-relay'
import { BLUE } from './../../ui'
import { createPollFragmentContainer } from 'fragments/Poll'
import { pluralise } from 'helpers/pluralize'
import dayjs from 'dayjs'
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
    votingHasEnded,
    hideVotes,
    viewerOwns,
    voteCount,
    pollClosesAt,
    viewerHasVoted
  } = discussion

  if (!poll) return null

  let totalVotes = 0
  if (viewerOwns || !hideVotes) {
    totalVotes = voteCount
  }

  function Choice(props) {
    const {
      choice: { title, voteCount, viewerSelected, _id },
      totalVotes,
      hideVotes,
      viewerOwns,
      votingHasEnded,
      hasViewer
    } = props

    const width =
      viewerOwns || !hideVotes
        ? ((voteCount / totalVotes) * 100).toFixed(2)
        : 100

    let className = 'choice s__dark__bg bd'
    if (viewerSelected) className = `${className} active`
    if (!viewerHasVoted && !votingHasEnded) className = `${className} elevated`

    function countVote() {
      if (totalVotes < 200) return ''
      return voteCount
    }

    function onChoiceClick(option) {
      if (viewerHasVoted) return
      if (votingHasEnded)
        return notification.error({
          message: 'Sorry',
          description: 'Voting had ended',
          placement: 'bottomRight'
        })

      voteMutation({ option: _id }, requireViewer)
    }

    const perc =
      viewerOwns || !hideVotes ? `${countVote()} (${width}%)` : countVote()

    return (
      <div className={className} onClick={(e) => onChoiceClick(_id)}>
        {(viewerOwns || !hideVotes) && (
          <div className="vote-meter s__image" style={{ width: `${width}%` }} />
        )}
        <div className="vote-text">
          {votingHasEnded || viewerHasVoted || (
            <span className="radio s__content__main" />
          )}{' '}
          {title} {!!voteCount && ` - ${perc}`}
        </div>
      </div>
    )
  }

  function pollStatus() {
    if (viewerHasVoted) return 'You have voted'
    if (votingHasEnded) return 'Voting has ended'

    const time = dayjs(pollClosesAt * 1000)
    return `Closes ${time.fromNow()}`
  }

  function getVoteCount() {
    if (voteCount > 200)
      return `${voteCount} ${pluralise('vote', voteCount)} / `
    return ''
  }

  return (
    <div className="pollview">
      {poll.edges.map((p) => (
        <Choice
          hasViewer={hasViewer}
          key={p.node.id}
          votingHasEnded={votingHasEnded}
          choice={p.node}
          hideVotes={hideVotes}
          viewerOwns={viewerOwns}
          totalVotes={totalVotes}
        />
      ))}
      <div>
        {getVoteCount()}
        {pollStatus()}
      </div>
    </div>
  )
}

PollView = createPollFragmentContainer(withViewer(PollView))
