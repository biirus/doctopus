const PREFIX = 'ORG:'

export const addOrgPrefix = (str?: string) => {
  return `${PREFIX} ${str}`
}

export const removeOrgPrefix = (str: string) => {
  const [maybeNum, num] = str.split(`${PREFIX} `)

  return num || maybeNum
}
