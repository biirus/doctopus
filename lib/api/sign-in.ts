import { getApiHeaders, getApiURL, setToken } from './lib'
import { User } from './users'

type SignInData = User & { token: string }

export const signIn = async (email: string, password: string) => {
  const authString = btoa(`${email}:${password}`)
  const response = await fetch(getApiURL('/api/signin'), {
    method: 'POST',
    headers: getApiHeaders(`Basic ${authString}`),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const { token, ...rest } = (await response.json()) as SignInData
  setToken(token)

  return rest
}
