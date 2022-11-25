export const getPublishDate = (date: string | null, locale = 'ru') => {
  return date
    ? new Intl.DateTimeFormat(locale, {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).format(new Date(date))
    : null
}
