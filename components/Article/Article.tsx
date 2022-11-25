import clsx from 'clsx'
import { getCMSImageSrc } from 'lib/cms'
import type { FC, HTMLAttributes } from 'react'
import ReactMarkdown from 'react-markdown'

type ArticleProps = HTMLAttributes<HTMLDivElement>

export const Article: FC<ArticleProps> = (props) => {
  return (
    <article
      className={clsx(
        'prose break-words',
        'prose-img:rounded-2xl prose-img:shadow prose-img:ring-1 prose-img:ring-slate-400/50',
        props.className
      )}
    >
      {props.children}
    </article>
  )
}

type MarkdownArticleProps = {
  children: string
} & HTMLAttributes<HTMLDivElement>

export const MarkdownArticle: FC<MarkdownArticleProps> = (props) => {
  return (
    <Article className={props.className}>
      <ReactMarkdown transformImageUri={getCMSImageSrc}>
        {props.children}
      </ReactMarkdown>
    </Article>
  )
}
