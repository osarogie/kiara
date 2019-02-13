import { graphql } from 'react-relay'
import { StartCulture } from 'renderers/StartCulture'
import withData from 'lib/withData'

const query = graphql`
  query newGroupQuery {
    ...Viewer_viewer
  }
`

export default function NewGroup() {
  return <StartCulture />
}

NewGroup = withData(NewGroup, { query })
