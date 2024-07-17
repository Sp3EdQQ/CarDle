import type { Collection } from "./shared"

type Model = {
  id: number
  make_id: number
  name: string
  __message: string
}

export type GetModelsResponse = {
  collection: Collection
  data: Model[]
}
