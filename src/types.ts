export type Size = {
  width: number
  height: number
}

export interface Icon {
  url: string
  reference: string
  type: undefined | string
  size: undefined | 'any' | Size | Size[]
}

export interface Image {
  type: string
  size: 'any' | Size | Size[]
}

export type TextFetcher = (url: string) => PromiseLike<string>
export type BufferFetcher = (url: string) => PromiseLike<ArrayBuffer>
