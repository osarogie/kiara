import { NextApiRequest, NextApiResponse } from 'next'
import { DATA_URL } from '../../src/constants'
import fetch from 'isomorphic-unfetch'

export default async function(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    try {
      const response = await fetch(`${DATA_URL}_/api`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          cookie: req.headers.cookie
        },
        body: JSON.stringify(req.body),
        cache: 'no-cache',
      })

      const json = await response.json()
      res.setHeader('Set-Cookie', response.headers.get('Set-Cookie'))
      res.status(response.status).json(json)
    } catch (error) {
      console.error(error)

      res.status(500).json({
        status: false,
        errors: ['An error occurred']
      })
    }
  } else {
    res.status(404).json({
      status: false,
      errors: ['Resource not found']
    })
  }
}

