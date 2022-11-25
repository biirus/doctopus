import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { FC, HTMLAttributes, useCallback } from 'react'

const PaginationButton: FC<HTMLAttributes<HTMLSpanElement>> = (props) => {
  const { children, ...rest } = props

  return (
    <span
      {...rest}
      className="relative inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      {children}
    </span>
  )
}

type PaginationProps = {
  page: number
  pageCount: number
  scroll?: boolean
  onPageChange?: (page: number) => void
} & HTMLAttributes<HTMLDivElement>

export const Pagination: FC<PaginationProps> = (props) => {
  const { page, pageCount, scroll = true, onPageChange } = props

  const { t } = useTranslation('pagination')
  const { query, push } = useRouter()

  const handlePageChange = useCallback(
    (page: number) => {
      if (typeof onPageChange === 'function') {
        onPageChange(page)
        return
      }

      push({ query: { ...query, page } }, undefined, {
        shallow: true,
        scroll,
      })
    },
    [onPageChange, push, query, scroll]
  )

  return (
    <nav
      className={clsx(
        'flex items-center justify-between',
        'border-t border-gray-200 bg-white',
        'px-4 py-3 sm:px-6',
        props.className
      )}
    >
      <div className="hidden sm:block">
        <p
          className="text-sm text-gray-700"
          dangerouslySetInnerHTML={{
            __html: t('current', {
              current: page,
              total: pageCount,
            }),
          }}
        />
      </div>
      <div className="flex flex-1 justify-between gap-2 sm:justify-end">
        {page > 1 ? (
          <PaginationButton onClick={() => handlePageChange(page - 1)}>
            {t('prev')}
          </PaginationButton>
        ) : (
          <div />
        )}

        {page < pageCount ? (
          <PaginationButton onClick={() => handlePageChange(page + 1)}>
            {t('next')}
          </PaginationButton>
        ) : (
          <div />
        )}
      </div>
    </nav>
  )
}
