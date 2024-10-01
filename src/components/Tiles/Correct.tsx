import { TileProps } from "./types.ts"
import { labelStyleGreen } from "./constants.ts"

export const Correct = ({ value }: TileProps) => {
  return <div className={labelStyleGreen}>{value}</div>
}
