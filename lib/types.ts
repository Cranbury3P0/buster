export interface Post {
  id: string
  sequence: number
  postNumber: string
  shortcode: string
  postUrl: string
  dateUtc: string
  imageCredit: string | null
  imagePath: string
  captionLength: number
  caption: string
}
