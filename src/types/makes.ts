import type { Collection } from "./shared"

type Make = {
  id: number
  name: string
}

export type GetMakesRespone = {
  collection: Collection
  data: Make[]
}
