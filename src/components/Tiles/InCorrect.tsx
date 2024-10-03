import { TileProps } from "../../types/types.ts"
import { labelStyleRed } from "./constants.ts"

export const InCorrect = ({ value }: TileProps) => {
  return <div className={labelStyleRed}>{value}</div>
}
