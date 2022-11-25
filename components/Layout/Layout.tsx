import dynamic from 'next/dynamic'
import Link from 'next/link'
import Head from 'next/head'
import { FC, HTMLAttributes } from 'react'

import { Logo } from 'components/Logo'
import { Navigation } from 'components/Navigation'
import { Footer } from 'components/Footer'

const PreviewToggle = dynamic(
  () => import('components/PreviewToggle').then((mod) => mod.PreviewToggle),
  { ssr: false }
)

type Props = {
  center?: boolean
  fullWidth?: boolean
  suppressHydrationWarning?: boolean
} & HTMLAttributes<HTMLDivElement>

export const Layout: FC<Props> = ({ children, suppressHydrationWarning }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      </Head>

      <div
        suppressHydrationWarning={suppressHydrationWarning}
        className="grid min-h-full flex-1 grid-rows-[max-content,1fr,max-content] bg-slate-100"
      >
        <div className="sticky top-0 z-10 bg-gradient-to-r from-slate-900 via-slate-900 to-primary-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative flex h-16 items-center justify-between gap-4">
              <div className="flex w-full items-center">
                <div className="hidden shrink-0 md:block">
                  <Link href="/">
                    <a>
                      <Logo iconOnly />
                    </a>
                  </Link>
                </div>

                <Navigation />

                <PreviewToggle className="ml-auto" />
              </div>
            </div>
          </div>
        </div>

        <div>{children}</div>

        <Footer className="container mx-auto w-full" />
      </div>
    </>
  )
}

export default Layout
