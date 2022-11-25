import { OrganizationFormData } from 'components/OrganizationForm/useFormValidation'
import { Pagination } from 'lib/cms'
import { getApiHeaders, getApiURL, getToken } from './lib'

export type Organization = {
  id: string
  number: string
  title: string
  description: string
  email: string
  phone: string
  contactPerson: string
  legalAddress: string
  actualAddress: string
  hidden?: boolean
}

export const createOrg = async (data: OrganizationFormData) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/organization`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'POST',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const org = (await response.json()) as Organization

  return org
}

export const getOrg = async (id: Organization['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/organization/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const org = (await response.json()) as Organization

  return org
}

export const updateOrg = async (
  id: Organization['id'],
  data: OrganizationFormData
) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/organization/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'PUT',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const org = (await response.json()) as Organization

  return org
}

export const getOrgsList = async (
  pagination: Pick<Pagination, 'page' | 'pageSize'>,
  search?: { q: string }
) => {
  const token = getToken()

  const url = new URL(getApiURL(`/api/organizations`))
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

  const orgs = (await response.json()) as {
    list: Organization[]
    count: number
  }

  return orgs
}

export const removeOrg = async (id: Organization['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/organization/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  return null
}

export const restoreOrg = async (id: Organization['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/organization/${id}/activate`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  return null
}
