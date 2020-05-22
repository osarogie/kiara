import { ReactRelayContext } from 'react-relay'

export default function RelayProvider({ environment, children }) {
  return (
    <ReactRelayContext.Provider value={{ environment }}>
      {children}
    </ReactRelayContext.Provider>
  )
}
