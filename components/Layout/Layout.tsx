import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

import { Logo } from 'components/Logo'
import { Navigation } from 'components/Navigation'
import { Footer } from 'components/Footer'

type Props = {
  center?: boolean
  fullWidth?: boolean
  suppressHydrationWarning?: boolean
} & HTMLAttributes<HTMLDivElement>

export const Layout: FC<Props> = ({ children, suppressHydrationWarning }) => {
  return (
    <div
      suppressHydrationWarning={suppressHydrationWarning}
      className="grid min-h-full flex-1 grid-rows-[max-content,1fr,max-content] bg-slate-100"
    >
      <div className="sticky top-0 z-10 bg-slate-900 from-slate-900 via-slate-900 to-primary-900 md:bg-gradient-to-r">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative flex h-16 items-center justify-between gap-4">
            <div className="hidden shrink-0 md:block">
              <Link href="/">
                <a>
                  <Logo iconOnly />
                </a>
              </Link>
            </div>

            <Navigation />

            <div className="flex-none text-white md:hidden">
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>{children}</div>

      <Footer className="container mx-auto w-full" />
    </div>
  )
}

export default Layout
