import { NextApiRequest, NextApiResponse } from 'next'

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if ('development' !== process.env.NEXT_PUBLIC_LQ_ENV || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  const cookie = (res.getHeader('set-cookie') as string[]) || []
  cookie.push('isPreviewMode=true; Path=/; SameSite=Lax')

  res.setHeader('set-cookie', cookie)

  // Redirect to the entry location
  res.redirect(
    Array.isArray(req.query.slug) ? req.query.slug[0] : req.query.slug
  )
}
