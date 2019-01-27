import { createPollFragmentContainer } from 'fragments/Poll'

function Choice({ choice: { title, vote_count, total_votes } }) {
  return (
    <div>
      {title} {vote_count} votes
    </div>
  )
}

export function PollView({ poll }) {
  return (
    <div>
      {poll.edges.map(p => (
        <Choice choice={p.node} />
      ))}
    </div>
  )
}

// PollView = createPollFragmentContainer(PollView)
