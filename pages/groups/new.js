import { graphql } from 'react-relay'
import { StartCulture } from 'renderers/StartCulture'
import withData from 'lib/withData'

const query = graphql`
  query newGroupQuery {
    ...Viewer_viewer @relay(mask: false)
  }
`

export default function NewGroup() {
  return <StartCulture />
}

NewGroup = withData(NewGroup, { query })
