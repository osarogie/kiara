import { NextApiRequest, NextApiResponse } from 'next'
import { downloadAndSend } from '../../[name]'

const S3_BUCKET = process.env.S3_BUCKET

export default async function Image(req: NextApiRequest, res: NextApiResponse) {
  const name = req.query.name as string
  const dimensions = req.query.dimensions as string
  console.log(S3_BUCKET)

  const awsFolder = `http://${S3_BUCKET}.s3.amazonaws.com/uploads`
  const downloadLink = `http://ahuswgemen.cloudimg.io/crop/${dimensions}/x/${awsFolder}/${name}`

  try {
    await downloadAndSend(`${name}-${dimensions}`, downloadLink, res)
  } catch (error) {
    res.status(500).json({ errors: [{ message: error.message }] })
    return
  }
}
