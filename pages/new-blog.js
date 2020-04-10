import { newGroupQuery } from '../src/relay/query/newGroupQuery'
import { StartCulture } from 'renderers/StartCulture'
import withData from 'lib/withData'

export default function NewGroup() {
  return <StartCulture />
}

NewGroup = withData(NewGroup, { query: newGroupQuery })
