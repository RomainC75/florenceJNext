import { NextApiRequest, NextApiResponse } from 'next'
import buildNotificationMailContent from '../../../utils/buildMailContent'
import sendEmail from '../../../utils/nodeMailer'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const keys = ['email', 'name', 'text']

  const allStringKeysArePresent: boolean = keys.every((key) => {
    const isPresent: boolean = key in req.body
    const isString: boolean = typeof req.body[key] === 'string'
    return isPresent && isString
  })
  if (!allStringKeysArePresent) {
    return res
      .status(400)
      .json({ message: 'need 3 string keys : email, name and text' })
  }
  sendEmail(
    'rom.chenard@gmail.com',
    'new message from your website',
    buildNotificationMailContent(req.body)
  )
  res.status(200).json(req.body)
}

export default handler
