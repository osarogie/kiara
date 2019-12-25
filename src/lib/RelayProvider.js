import { RelayEnvironmentProvider } from 'react-relay/hooks'

export default function RelayProvider({ environment, children }) {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  )
}
