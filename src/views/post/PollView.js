import { BLUE } from './../../ui'
import { createPollFragmentContainer } from 'fragments/Poll'
import 'pollview.scss'

function Choice({ choice: { title, vote_count }, totalVotes, hide_votes }) {
  const width = hide_votes ? 100 : ((vote_count / totalVotes) * 100).toFixed(2)

  return (
    <div className="choice s__dark__bg">
      {!hide_votes && (
        <div className="vote-meter s__image" style={{ width: `${width}%` }} />
      )}
      <div className="vote-text">
        {title} {vote_count && ` - ${vote_count}`}
      </div>
    </div>
  )
}

export function PollView({ discussion }) {
  const { poll, voting_has_ended, hide_votes } = discussion
  let totalVotes = 0
  if (!hide_votes) {
    poll.edges.forEach(({ node }) => {
      totalVotes += node.vote_count
    })
  }

  return (
    <div className="pollview">
      {poll.edges.map(p => (
        <Choice
          key={p.node.id}
          choice={p.node}
          hide_votes={hide_votes}
          totalVotes={totalVotes}
        />
      ))}
      <div>{voting_has_ended && 'Voting has ended'}</div>
    </div>
  )
}

PollView = createPollFragmentContainer(PollView)
