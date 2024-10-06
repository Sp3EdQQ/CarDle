import { TileProps } from "@/types"
import { labelStyleGreen } from "./constants"

export const Correct = ({ value }: TileProps) => {
  return <div className={labelStyleGreen}>{value}</div>
}
