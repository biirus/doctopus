import { PatientFormData } from 'components/PatientForm/useFormValidation'
import { Pagination } from 'lib/cms'
import { getApiHeaders, getApiURL, getToken } from './lib'
import { Organization } from './orgs'

export type Patient = {
  id: string
  number: string
  firstName: string
  middleName: string
  lastName: string
  gender: 'male' | 'female'
  dateOfBirth: string
  phone: string
  email: string
  hidden?: boolean
} & PatientRelations

type PatientRelations = {
  organizationId: Organization['id'] | undefined
}

export const createPatient = async (
  data: PatientFormData & PatientRelations
) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/patient/`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'POST',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const patient = (await response.json()) as Patient

  return patient
}

export const getPatient = async (id: Patient['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/patient/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const patient = (await response.json()) as Patient

  return patient
}

export const getOrgPatientsList = async (
  orgID: Patient['id'],
  pagination: Pick<Pagination, 'page' | 'pageSize'>,
  search?: { q: string }
) => {
  const token = getToken()

  const url = new URL(getApiURL(`/api/patients/${orgID}`))
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

  const patients = (await response.json()) as {
    list: Patient[]
    count: number
  }

  return patients
}

export const updatePatient = async (
  id: Patient['id'],
  data: PatientFormData & PatientRelations
) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/patient/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'PUT',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  const patient = (await response.json()) as Patient

  return patient
}

export const removePatient = async (id: Patient['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/patient/${id}`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  return null
}

export const restorePatient = async (id: Patient['id']) => {
  const token = getToken()

  const response = await fetch(getApiURL(`/api/patient/${id}/activate`), {
    headers: getApiHeaders(`Bearer ${token}`),
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error(String(response.status))
  }

  return null
}
