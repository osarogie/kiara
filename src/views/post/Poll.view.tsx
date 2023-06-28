import {
  commitMutation,
  graphql,
  useFragment,
  useRelayEnvironment
} from 'react-relay'
import { pluralise } from 'helpers/pluralize'
import dayjs from 'dayjs'
import { useViewer } from 'lib/withViewer'
import notification from 'antd/lib/notification'
import { useCallback, useMemo } from 'react'
import {
  Poll_discussion$key,
  Poll_discussion$data
} from '@artifacts/relay/Poll_discussion.graphql'

function voteMutation({ option }, requireViewer, environment) {
  if (!requireViewer('Please login to vote')) return
  const variables = {
    input: { option }
  }

  commitMutation(environment, {
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
    `
  })
}

type PollViewProps = {
  discussion: Poll_discussion$key
}

export function PollView({ discussion }: PollViewProps) {
  const pollDiscussion = useFragment(
    graphql`
      fragment Poll_discussion on Discussion {
        votingHasEnded
        viewerHasVoted
        hideVotes
        hasPoll
        viewerOwns
        voteCount
        pollClosesAt
        poll(first: 20) @connection(key: "PostListItem_poll", filters: []) {
          edges {
            node {
              id
              _id
              title
              voteCount
              viewerSelected
            }
          }
        }
      }
    `,
    discussion
  )

  const {
    poll,
    votingHasEnded,
    hideVotes,
    viewerOwns,
    voteCount,
    pollClosesAt,
    viewerHasVoted
  } = pollDiscussion

  if (!poll) return null

  const totalVotes = useMemo(() => (viewerOwns || !hideVotes ? voteCount : 0), [
    viewerOwns,
    hideVotes
  ])

  const derivedPollStatus = useMemo(() => {
    if (viewerHasVoted) return 'You have voted'
    if (votingHasEnded) return 'Voting has ended'

    const time = dayjs(pollClosesAt * 1000)
    // @ts-ignore
    return `Closes ${time.fromNow()}`
  }, [viewerHasVoted, votingHasEnded, pollClosesAt])

  const derivedVoteCount = useMemo(() => {
    if (voteCount > 200)
      return `${voteCount} ${pluralise('vote', voteCount)} / `
    return ''
  }, [voteCount])

  return (
    <div className="pollview">
      {poll.edges.map((p) => (
        <Choice
          key={p.node.id}
          choice={p.node}
          totalVotes={totalVotes}
          pollDiscussion={pollDiscussion}
        />
      ))}
      <div>
        {derivedVoteCount}
        {derivedPollStatus}
      </div>
    </div>
  )
}

type ChoiceProps = {
  pollDiscussion: Poll_discussion$data
  choice: Poll_discussion$data['poll']['edges'][number]['node']
  totalVotes: number
}

function Choice({
  pollDiscussion,
  totalVotes,
  choice: { title, voteCount, viewerSelected, _id }
}: ChoiceProps) {
  const {
    votingHasEnded,
    hideVotes,
    viewerOwns,
    viewerHasVoted
  } = pollDiscussion

  const environment = useRelayEnvironment()
  const { requireViewer } = useViewer()

  const width =
    viewerOwns || !hideVotes ? ((voteCount / totalVotes) * 100).toFixed(2) : 100

  let className = 'choice s__dark__bg bd'
  if (viewerSelected) className = `${className} active`
  if (!viewerHasVoted && !votingHasEnded) className = `${className} elevated`

  const derivedVoteCount = useMemo(() => {
    if (totalVotes < 200) return ''
    return voteCount
  }, [voteCount])

  const onChoiceClick = useCallback(
    (_id) => {
      if (viewerHasVoted) return
      if (votingHasEnded)
        return notification.error({
          message: 'Sorry',
          description: 'Voting had ended',
          placement: 'bottomRight'
        })

      voteMutation({ option: _id }, requireViewer, environment)
    },
    [voteMutation, viewerHasVoted, votingHasEnded, requireViewer, environment]
  )

  const perc =
    viewerOwns || !hideVotes
      ? `${derivedVoteCount} (${width}%)`
      : derivedVoteCount

  return (
    <div className={className} onClick={(_e) => onChoiceClick(_id)}>
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
