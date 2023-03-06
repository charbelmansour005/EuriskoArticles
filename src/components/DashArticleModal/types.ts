export type ArticleCardModalProps = {
  headline?: string
  leadParagraph?: string
  author?: string
  url?: string | undefined | any
  section?: string | null
  multimedia?: {url: string}[] | any
  hideModal?: () => void
}
