import Cookies from 'js-cookie'

export const getApiURL = (path: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`
}

export const getApiHeaders = (authHeader?: string) => {
  const headers: RequestInit['headers'] = {
    'Content-Type': 'application/json',
  }

  if (authHeader) {
    headers.Authorization = authHeader
  }

  return headers
}

export const setToken = (token: string) => {
  Cookies.set('lqgen:token', token, { sameSite: 'strict', secure: true })
}

export const removeToken = () => {
  Cookies.remove('lqgen:token')
}

export const getToken = () => {
  return Cookies.get('lqgen:token')
}
