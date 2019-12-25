import { profileQuery } from './../../src/relay/query/profileQuery'
import { PageContainer } from 'components/_partials/pageContainer'
import { EditUserFragmentContainer } from './../../src/renderers/EditUser'
import withData from 'lib/withData'

export default function EditProfile({ viewer }) {
  return (
    <PageContainer title="Profile Settings - TheCommunity">
      <EditUserFragmentContainer viewer={viewer} />
    </PageContainer>
  )
}

EditProfile = withData(EditProfile, { query: profileQuery, expect: 'viewer' })
