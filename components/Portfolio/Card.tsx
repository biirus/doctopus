import clsx from 'clsx'
import Image from 'next/image'
import { CSSProperties, FC, HTMLAttributes, useState } from 'react'

type CardProps = { imgSrc: string } & HTMLAttributes<HTMLDivElement>

export const Card: FC<CardProps> = (props) => {
  const [isActive, setActive] = useState(false)

  const [posX, setX] = useState(0)
  const [posY, setY] = useState(0)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const angleY = ((width / 2 - posX) / width) * 10
  const angleX = (((height / 2 - posY) * -1) / height) * 10
  const translateX = (((width / 2 - posX) * -1) / width) * 10
  const translateY = (((height / 2 - posY) * -1) / height) * 10

  const perspective = Math.max(width, height)

  const style: CSSProperties = {
    transformOrigin: '50%',
    transformStyle: 'preserve-3d',
    boxShadow: `${translateX * 2.5}px ${
      translateY * 2.5
    }px 25px -3px rgb(0 0 0 / 0.1), ${translateX * 2.5}px ${
      translateY * 2.5
    }px 16px -4px rgb(0 0 0 / 0.1), ${translateX * 2.5}px ${
      translateY * 2.5
    }px 6px -2px rgb(0 0 0 / 0.1)`,
    transform: `translate3d(${translateX}px, ${translateY}px, 2rem) rotateY(${angleY}deg) rotateX(${angleX}deg)`,
  }

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-2xl shadow-lg transition-transform !duration-[50ms]',
        'aspect-[1/1.5]',
        props.className
      )}
      style={isActive ? style : undefined}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={(event) => {
        const element = event.currentTarget as HTMLDivElement

        const posX = event.nativeEvent.offsetX ?? 0
        const posY = event.nativeEvent.offsetY ?? 0

        setX(posX)
        setY(posY)
        setWidth(element.clientWidth)
        setHeight(element.clientHeight)
      }}
    >
      <div className="pointer-events-none relative overflow-hidden rounded-2xl">
        <Image
          width={512}
          height={768}
          src={props.imgSrc}
          alt={'item'}
          layout="responsive"
        />

        <div
          className="absolute top-0 left-0"
          style={{
            width: `${perspective * 1.5}px`,
            height: `${perspective * 1.5}px`,
            margin: `${perspective * -0.5}px 0 0 ${perspective * -0.75}px`,
            backgroundImage: 'radial-gradient(#fff5, transparent 70%)',
            transform: isActive
              ? `translate3d(${width * 0.1 + posX * 0.8}px, ${
                  posY - height / 2
                }px, 0)`
              : `translate3d(-100%, -100%, 0)`,
          }}
        />
      </div>
      {props.children}
    </div>
  )
}
