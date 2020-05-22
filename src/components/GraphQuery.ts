import { useState, ReactNode, useEffect } from 'react'
import { GRAPHQL_ENDPOINT } from '../../tc.config'

const request = (query: string, variables?: any) =>
  fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      query,
      variables
    })
  }).then(response => response.json())

interface GraphQueryProps {
  render: (data: any) => ReactNode
  query: string
}

interface GraphResponse {
  data?: { [x: string]: any }
}

export function GraphQuery(props: GraphQueryProps): ReactNode {
  const [data, setData]: [GraphResponse | null, (x: any) => any] = useState(
    null
  )

  useEffect(() => {
    request(props.query).then(setData)
  }, [props.query])

  if (!data || !data!.data) return null

  return props.render({ data })
}
