import { getApiHeaders, getApiURL, setToken } from './lib'
import { User } from './users'

type SignUpData = User & { token: string }

export const signUp = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  const response = await fetch(getApiURL('/signup'), {
    method: 'POST',
    headers: getApiHeaders(),
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
    }),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const { token, ...rest } = (await response.json()) as SignUpData
  setToken(token)

  return rest
}
