import { PageContainer } from 'components/_partials/pageContainer'
import { EditUserFragmentContainer } from './../../src/renderers/EditUser'
import { graphql } from 'react-relay'
import { AppBar } from 'components/AppBar'
import withData from 'lib/withData'

const query = graphql`
  query profileQuery {
    ...Viewer_viewer
    viewer {
      ...EditUser_viewer
    }
  }
`

export default function EditProfile({ viewer }) {
  return (
    <PageContainer title="Profile Settings - TheCommunity">
      <EditUserFragmentContainer viewer={viewer} />
    </PageContainer>
  )
}

EditProfile = withData(EditProfile, { query, expect: 'viewer' })
