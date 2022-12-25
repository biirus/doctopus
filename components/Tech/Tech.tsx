import clsx from 'clsx'
import { TechIcon } from './TechIcon'
import { TechRow } from './TechRow'
import type { FC, HTMLAttributes } from 'react'
import Image from 'next/image'

type TechProps = HTMLAttributes<HTMLDivElement>

export const Tech: FC<TechProps> = (props) => {
  return (
    <div className={clsx('relative ', props.className)}>
      <div className="container relative mx-auto px-4 py-16 text-slate-900 sm:px-6 lg:py-32">
        <div className="mx-auto grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2  xl:gap-x-16">
          <div>
            <h2 className="text-5xl font-semibold tracking-tight text-slate-900">
              Лучшие технологии
            </h2>
            <div className="mt-3 text-2xl text-slate-600">
              <p className="max-w-prose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                dolor suscipit sequi facilis soluta culpa quisquam harum nihil,
                voluptates ad. Temporibus minima molestiae similique iure ipsa
                fugiat harum ratione magnam.
              </p>
            </div>
          </div>

          <div className="-mx-4 overflow-x-hidden px-4 py-8 lg:mx-0">
            <div className="relative flex flex-col gap-12 overflow-visible  lg:flex-row">
              <TechRow level={1}>
                <TechIcon level={1}>
                  <Image
                    src="/images/tech/nextjs.svg"
                    alt="NextJS"
                    width={256}
                    height={256}
                  />
                </TechIcon>
                <TechIcon level={1}>
                  <Image
                    src="/images/tech/reactjs.svg"
                    alt="ReactJS"
                    width={256}
                    height={256}
                  />
                </TechIcon>
                <TechIcon level={1}>
                  <Image
                    src="/images/tech/typescript.svg"
                    alt="Typescript"
                    width={256}
                    height={256}
                  />
                </TechIcon>
              </TechRow>
              <TechRow level={2}>
                <TechIcon level={2}>
                  <Image
                    src="/images/tech/java.svg"
                    alt="Java"
                    width={256}
                    height={256}
                  />
                </TechIcon>
                <TechIcon level={2}>
                  <Image
                    src="/images/tech/spring.svg"
                    alt="Spring"
                    width={256}
                    height={256}
                  />
                </TechIcon>
                <TechIcon level={2}>
                  <Image
                    src="/images/tech/vercel.svg"
                    alt="Vercel"
                    width={256}
                    height={256}
                  />
                </TechIcon>
                <TechIcon level={2}>
                  <Image
                    src="/images/tech/docker.svg"
                    alt="Docker"
                    width={256}
                    height={256}
                  />
                </TechIcon>
              </TechRow>
              <TechRow level={3}>
                <TechIcon level={3}>
                  <Image
                    src="/images/tech/github.svg"
                    alt="Github"
                    width={256}
                    height={256}
                  />
                </TechIcon>
                <TechIcon level={3}>
                  <Image
                    src="/images/tech/nodejs.svg"
                    alt="NodeJS"
                    width={256}
                    height={256}
                  />
                </TechIcon>
                <TechIcon level={3}>
                  <Image
                    src="/images/tech/graphql.svg"
                    alt="GraphQL"
                    width={256}
                    height={256}
                  />
                </TechIcon>
              </TechRow>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
