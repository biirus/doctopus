declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_LQ_ENV: 'development' | 'production'
    NEXT_PUBLIC_CMS_API_URL: string
    NEXT_PUBLIC_API_URL: string
  }
}
