import { TileProps } from "../../types/types.ts"
import { labelStyleGreen } from "./constants.ts"

export const Correct = ({ value }: TileProps) => {
  return <div className={labelStyleGreen}>{value}</div>
}
