import { newGroupQuery } from '../src/relay/query/newGroupQuery'
import { StartCulture } from 'renderers/StartCulture'
import withData from 'lib/withData'

export default function NewCulture() {
  return <StartCulture />
}

NewCulture = withData(NewCulture, { query: newGroupQuery, forceLogin: true })
