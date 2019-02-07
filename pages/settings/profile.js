import { EditUserFragmentContainer } from './../../src/renderers/EditUser'
import { graphql } from 'react-relay'
import { AppBar } from 'components/AppBar'
import withData from 'lib/withData'

const query = graphql`
  query profileQuery {
    ...Viewer_viewer @relay(mask: false)
    viewer {
      ...EditUser_viewer
    }
  }
`

export default function EditProfile({ viewer }) {
  return (
    <>
      <AppBar className="elevated" />
      <EditUserFragmentContainer viewer={viewer} />
    </>
  )
}

EditProfile = withData(EditProfile, { query, expect: 'viewer' })
