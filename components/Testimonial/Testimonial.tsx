import clsx from 'clsx'
import Image from 'next/image'
import type { FC, HTMLAttributes } from 'react'

type TestimonialProps = HTMLAttributes<HTMLDivElement>

export const Testimonial: FC<TestimonialProps> = (props) => {
  return (
    <div
      className={clsx(
        'bg-gradient-to-b from-primary-900 via-primary-900 to-slate-900 md:bg-gradient-to-r',
        props.className
      )}
    >
      <div className="container mx-auto grid grid-cols-4 gap-0 px-4 text-white sm:px-6 md:gap-8 lg:gap-16">
        <div className="relative col-span-4  -mt-8 aspect-[8/13] overflow-hidden rounded-2xl bg-white text-black shadow-lg sm:col-span-2 md:-my-16 xl:col-span-1">
          <Image
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80"
            alt="person"
            layout="fill"
          />
        </div>

        <div className="col-span-4 py-8 sm:col-span-2  xl:col-span-3">
          <div className="max-w-prose text-lg sm:text-xl lg:text-2xl">
            <figure>
              <svg
                className="mb-3 h-10 w-10 text-white/30 md:mb-6 md:h-14 md:w-14"
                viewBox="0 0 512.5 512.5"
              >
                <path
                  fill="currentColor"
                  d="M112.5 208.25c61.856 0 112 50.145 112 112s-50.144 112-112 112-112-50.145-112-112l-.5-16c0-123.712 100.288-224 224-224v64c-42.737 0-82.917 16.643-113.137 46.863a162.322 162.322 0 0 0-15.915 18.51c5.719-.9 11.58-1.373 17.552-1.373zm288 0c61.855 0 112 50.145 112 112s-50.145 112-112 112-112-50.145-112-112l-.5-16c0-123.712 100.287-224 224-224v64c-42.736 0-82.918 16.643-113.137 46.863a162.23 162.23 0 0 0-15.916 18.51 112.84 112.84 0 0 1 17.553-1.373z"
                />
              </svg>
              <blockquote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, quasi. Autem facere quas voluptatum consequuntur,
                voluptatem perferendis quisquam provident, omnis culpa sunt ut
                iste! Ducimus nam qui deleniti distinctio fuga?
              </blockquote>

              <figcaption className="mt-6">
                —Aldous Huxley, <cite>Brave New World</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
