import { TileProps } from "@/types"
import { cx } from "@/utils/cx.ts"
import { labelStyleYellow } from "./constants.ts"
import ArrowD from "../../assets/images/Tiles/arrow.svg?react"

export const ArrowUp = ({ value }: TileProps) => {
  return (
    <div className={cx(labelStyleYellow, "relative")}>
      <ArrowD className="h-full text-orange-600" />
      <span className="absolute flex text-center m-auto left-0 top-0 items-center justify-center h-full w-full">
        {value}
      </span>
    </div>
  )
}
