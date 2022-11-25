import { NextApiRequest, NextApiResponse } from 'next'

export default async function exit(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  res.clearPreviewData()

  const cookie = (res.getHeader('set-cookie') as string[]) || []
  cookie.push('isPreviewMode=false; Path=/; SameSite=Lax')

  res.setHeader('set-cookie', cookie)

  // Redirect to the entry location
  res.redirect(
    Array.isArray(req.query.slug) ? req.query.slug[0] : req.query.slug || '/'
  )
}
