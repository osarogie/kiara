import { devLog } from './../lib/devLog'
import { DATA_URL } from '../constants'
import { useState, ReactNode, useEffect } from 'react'

const request = (query: string, variables?: any) =>
  fetch(`${DATA_URL}_/api`, {
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
  }).then(response => devLog(response.json()))

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

  useEffect(
    () => {
      request(props.query).then(setData)
    },
    [props.query]
  )

  if (!data || !data!.data) return null

  return props.render({ data })
}
