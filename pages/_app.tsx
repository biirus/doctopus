import 'assets/base.css'

import { appWithTranslation } from 'next-i18next'

import Head from 'next/head'
import { ToastProvider } from 'contexts/ToastContext'

import type { SSRConfig } from 'next-i18next'
import type { AppProps } from 'next/app'
import type { FC } from 'react'
import type { PageProps } from 'lib/types'

type Props<TPageProps> = AppProps<TPageProps> & {
  pageProps: SSRConfig
}

const App: FC<Props<PageProps>> = (props) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
        />
      </Head>

      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </>
  )
}

export default appWithTranslation(App)