export type Article = {
  lead_paragraph: string
  headline: {
    main: string
  }
  byline: {
    original: string | null
  }
  _id: string | null
  web_url: string | null
  section_name: string | null
  multimedia: {url: string}[] | any
}

export type InitialArticleState = {
  articles: Article[]
  filteredArticles: Article[]
}
