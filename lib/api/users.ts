import { UserFormData } from 'components/UserForm/useFormValidation'
import { Pagination } from 'lib/cms'
import { getApiHeaders, getApiURL, getToken } from './lib'
import { Organization } from './orgs'

export const ROLES = {
  MANAGER: 0,
  DOCTOR: 50,
  REGISTRATOR: 100,
} as const

export type Role = keyof typeof ROLES

export type User = {
  id: string
  email: string
  roles: Role[]
  firstName: string
  lastName: string
  middleName?: string
  phone?: string
  hidden: boolean
} & UserRelations

type UserRelations = {
  organizationId: Organization['id'] | undefined
}

export const createUser = async (data: UserFormData & UserRelations) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/profile/`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'POST',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const user = (await response.json()) as User

  return user
}

export const getUser = async (id: User['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/profile/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const user = (await response.json()) as User

  return user
}

export const getOrgUsersList = async (
  orgID: User['id'],
  pagination: Pick<Pagination, 'page' | 'pageSize'>,
  search?: { q: string }
) => {
  const token = getToken()

  const url = new URL(getApiURL(`/api/profiles/${orgID}`))
  url.searchParams.set('page', (pagination.page - 1).toString())
  url.searchParams.set('size', pagination.pageSize.toString())

  if (search?.q) {
    url.searchParams.set('query', search.q)
  }

  const response = await fetch(url, {
    headers: getApiHeaders(`Bearer ${token}`),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const users = (await response.json()) as {
    list: User[]
    count: number
  }

  return users
}

export const updateUser = async (
  id: User['id'],
  data: UserFormData & UserRelations
) => {
  const token = getToken()

  const dataToSave: Omit<UserFormData, 'password' | 'confirmPassword'> = {
    firstName: data.firstName,
    middleName: data.middleName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    roles: data.roles,
  }

  const response = await fetch(getApiURL(`/api/profile/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'PUT',
    body: JSON.stringify(dataToSave),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const user = (await response.json()) as User

  return user
}

export const getRoleWithHighestPermissions = (roles: Role[]) => {
  const sortedRoles = roles.sort((a, b) => ROLES[a] - ROLES[b])
  const [highestRole] = sortedRoles

  return highestRole
}

export const removeUser = async (id: User['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/profile/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  return null
}

export const restoreUser = async (id: User['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/profile/${id}/activate`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  return null
}
