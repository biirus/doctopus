import { Role } from './api/users'

export const entities = ['orgs', 'users', 'patients', 'orders'] as const
export type Entity = typeof entities[number]

export const actions = [
  'create',
  'read',
  'read-list',
  'edit',
  'delete',
] as const
export type Action = typeof actions[number]
export type Rule = `${Entity}:${Action}`

export type AccessMatrix = Record<Role, Set<Rule>>
export const accessMatrix: AccessMatrix = {
  REGISTRATOR: new Set([
    'patients:create',
    'patients:read',
    'patients:read-list',
    'patients:edit',
    'patients:delete',

    'orders:create',
    'orders:read',
    'orders:read-list',
    'orders:edit',
    'orders:delete',
  ]),
  DOCTOR: new Set([
    'patients:create',
    'patients:read',
    'patients:read-list',
    'patients:edit',
    'patients:delete',

    'orders:create',
    'orders:read',
    'orders:read-list',
    'orders:edit',
    'orders:delete',
  ]),
  MANAGER: new Set([
    'orgs:create',
    'orgs:read',
    'orgs:read-list',
    'orgs:edit',
    'orgs:delete',

    'users:create',
    'users:read',
    'users:read-list',
    'users:edit',
    'users:delete',
  ]),
}
