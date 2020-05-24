import { useContext } from 'react'
import { ReactRelayContext } from 'react-relay'

export function useRelay() {
  return useContext(ReactRelayContext)
}
