import type { Collection } from "./shared"

export type Trim = {
  id: number
  make_model_id: number
  year: number
  name: string
  description: string
  msrp: number
  invoice: number
  created: string
  modified: string
}

export type GetTrimsResponse = {
  collection: Collection
  data: Trim[]
}
