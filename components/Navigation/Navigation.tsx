import clsx from 'clsx'
import { useRouter } from 'next/router'
import { Logo } from 'components/Logo'
import { AnimatePresence, motion } from 'framer-motion'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useToggle } from 'lib/hooks/useToggle'
import { FC, HTMLAttributes } from 'react'

type NavigationProps = HTMLAttributes<HTMLDivElement>

const navigation = [
  { name: 'home', href: '/' },
  { name: 'portfolio', href: '/portfolio' },
  { name: 'about', href: '/about' },
  { name: 'contacts', href: '/contacts' },
]

export const Navigation: FC<NavigationProps> = () => {
  const { t } = useTranslation('nav')
  const [open, toggle] = useToggle(false)
  const { asPath } = useRouter()

  return (
    <>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-600/70 backdrop-blur-sm md:hidden"
            onClick={toggle}
          />
        )}
      </AnimatePresence>

      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
        onClick={toggle}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </button>

      <motion.div
        variants={{
          open: { opacity: 1, x: '0%' },
          closed: { opacity: 0, x: '-100%' },
        }}
        transition={{
          type: 'just',
        }}
        initial={false}
        animate={open ? 'open' : 'closed'}
        className="fixed left-0 top-0 z-10 h-screen w-full max-w-xs bg-slate-900 p-4 shadow-2xl md:relative md:ml-10 md:block md:h-auto md:max-w-none md:!transform-none md:bg-transparent md:p-0 md:!opacity-100 md:shadow-none"
      >
        <div className="mb-4 flex justify-between md:hidden">
          <Logo className="text-white" />

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            tabIndex={!open ? -1 : 0}
            onClick={toggle}
          >
            <span className="sr-only">Close sidebar</span>
            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          {navigation.map((item) => {
            const isCurrent = asPath.startsWith(item.href)

            return (
              <Link key={item.name} href={item.href}>
                <a
                  className={clsx('rounded-md py-2 px-3 text-sm font-medium ', {
                    'text-primary-300': isCurrent,
                    'text-white': !isCurrent,
                  })}
                >
                  {t(item.name)}
                </a>
              </Link>
            )
          })}
        </div>
      </motion.div>
    </>
  )
}
