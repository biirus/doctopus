export const isRequired = <T extends string | unknown[]>(str?: T): str is T => {
  if (!str) {
    return false
  }

  return str.length > 0
}

export const isEmail = (str: string) => {
  return Boolean(
    String(str)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  )
}

export const isMinLength = (str: string, length: number) => {
  return str.length >= length
}

export const isSame = (str: string, confirm: string) => {
  return str === confirm
}

export const isPhone = (str: string) => {
  return Boolean(
    String(str)
      .toLowerCase()
      .match(/^\+7\s\([0-9]{3}\)\s[0-9]{3}\s[0-9]{4,6}$/im)
    // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  )
}
