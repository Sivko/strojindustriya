export interface Root {
  object: string
  results: Result[]
  next_cursor: any
  has_more: boolean
  type: string
  page_or_database: PageOrDatabase
  request_id: string
}

export interface Result {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover: any
  icon: any
  parent: Parent
  archived: boolean
  properties: Properties
  url: string
  public_url: any
}

export interface CreatedBy {
  object: string
  id: string
}

export interface LastEditedBy {
  object: string
  id: string
}

export interface Parent {
  type: string
  database_id: string
}

export interface Properties {
  description: Description
  slug: Slug
  amount: Amount
  address: Address
  order: Order
  date: Date
  style: Style
  map: Map
  Status: Status
  square: Square
  media: Media
  title: Title
}

export interface Description {
  id: string
  type: string
  rich_text: RichText[]
}

export interface RichText {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: any
}

export interface Text {
  content: string
  link: any
}

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Slug {
  id: string
  type: string
  rich_text: RichText2[]
}

export interface RichText2 {
  type: string
  text: Text2
  annotations: Annotations2
  plain_text: string
  href: any
}

export interface Text2 {
  content: string
  link: any
}

export interface Annotations2 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Amount {
  id: string
  type: string
  number: number
}

export interface Address {
  id: string
  type: string
  rich_text: RichText3[]
}

export interface RichText3 {
  type: string
  text: Text3
  annotations: Annotations3
  plain_text: string
  href: any
}

export interface Text3 {
  content: string
  link: any
}

export interface Annotations3 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Order {
  id: string
  type: string
  number: any
}

export interface Date {
  id: string
  type: string
  date: Date2
}

export interface Date2 {
  start: string
  end: string
  time_zone: any
}

export interface Style {
  id: string
  type: string
  rich_text: RichText4[]
}

export interface RichText4 {
  type: string
  text: Text4
  annotations: Annotations4
  plain_text: string
  href: any
}

export interface Text4 {
  content: string
  link: any
}

export interface Annotations4 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Map {
  id: string
  type: string
  rich_text: any[]
}

export interface Status {
  id: string
  type: string
  status: Status2
}

export interface Status2 {
  id: string
  name: string
  color: string
}

export interface Square {
  id: string
  type: string
  number: number
}

export interface Media {
  id: string
  type: string
  files: File[]
}

export interface File {
  name: string
  type: string
  file: File2
}

export interface File2 {
  url: string
  expiry_time: string
}

export interface Title {
  id: string
  type: string
  title: Title2[]
}

export interface Title2 {
  type: string
  text: Text5
  annotations: Annotations5
  plain_text: string
  href: any
}

export interface Text5 {
  content: string
  link: any
}

export interface Annotations5 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface PageOrDatabase {}
