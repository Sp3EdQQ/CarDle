import { TileProps } from "@/types"
import { labelStyleRed } from "./constants"

export const InCorrect = ({ value }: TileProps) => {
  return <div className={labelStyleRed}>{value}</div>
}
