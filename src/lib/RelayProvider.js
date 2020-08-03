import { ReactRelayContext } from 'react-relay'
import { useContext } from 'react'

export default function RelayProvider({ environment, children }) {
  return (
    <ReactRelayContext.Provider value={{ environment }}>
      {children}
    </ReactRelayContext.Provider>
  )
}

export function useEnvironment() {
  return useContext(ReactRelayContext).environment
}
