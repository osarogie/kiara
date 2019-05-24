import { ReactRelayContext } from 'react-relay'

export default function RelayProvider({ environment, variables, children }) {
  return (
    <ReactRelayContext.Provider
      value={{
        environment,
        variables
      }}
    >
      {children}
    </ReactRelayContext.Provider>
  )
}
