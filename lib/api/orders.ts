import { OrderFormData } from 'components/OrderForm/useFormValidation'
import { Analyse } from 'lib/analyses'
import { Pagination } from 'lib/cms'
import { Service } from 'lib/services'
import { getApiHeaders, getApiURL, getToken } from './lib'
import { Organization } from './orgs'
import { Patient } from './patients'

export type Order = {
  id: string
  number: string
  created: string
  authorId: Patient['id']
  organization: Organization
  patient: Patient
  analyses: Array<{
    article: Analyse['attributes']['article']
    formData?: unknown
  }>
  services: Array<{
    article: Service['attributes']['article']
    formData?: unknown
  }>
}

export const createOrder = async (data: OrderFormData) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/order/`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'POST',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const order = (await response.json()) as Order

  return order
}

export const getOrder = async (id: Order['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/order/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const order = (await response.json()) as Order

  return order
}

export const getOrgOrdersList = async (
  orgID: Order['id'],
  pagination: Pick<Pagination, 'page' | 'pageSize'>
) => {
  const token = getToken()

  const url = new URL(getApiURL(`/api/orders/organization/${orgID}`))
  url.searchParams.set('page', (pagination.page - 1).toString())
  url.searchParams.set('size', pagination.pageSize.toString())

  const response = await fetch(url, {
    headers: getApiHeaders(`Bearer ${token}`),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const orders = (await response.json()) as {
    list: Order[]
    count: number
  }

  return orders
}

export const getPatientOrdersList = async (
  patientID: Patient['id'],
  pagination: Pick<Pagination, 'page' | 'pageSize'>
) => {
  const token = getToken()

  const url = new URL(getApiURL(`/api/orders/patient/${patientID}`))
  url.searchParams.set('page', (pagination.page - 1).toString())
  url.searchParams.set('size', pagination.pageSize.toString())

  const response = await fetch(url, {
    headers: getApiHeaders(`Bearer ${token}`),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const orders = (await response.json()) as {
    list: Order[]
    count: number
  }

  return orders
}

export const updateOrder = async (id: Order['id'], data: OrderFormData) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/order/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'PUT',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const order = (await response.json()) as Order

  return order
}

export const removeOrder = async (id: Order['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/order/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  return null
}

export const restoreOrder = async (id: Order['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/order/${id}/activate`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  return null
}
