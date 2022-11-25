import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const loadTranslations = async (locale = 'ru', namespaces: string[]) => {
  return await serverSideTranslations(locale, [
    ...namespaces,
    'nav',
    'auth',
    'common',
    'pagination',
  ])
}
