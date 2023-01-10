export type ArticleCardBaseProps = {
  headline?: string
  leadParagraph?: string
  author?: string
}

export type ArticleCardAllProps = ArticleCardBaseProps & {
  url?: string | undefined | any
  section?: string | null
  multimedia?: {url: string}[] | any
}
