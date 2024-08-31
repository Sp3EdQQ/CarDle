import { TileProps } from "./types.ts"
import { cx } from "../../utils/cx.ts"
import { labelStyleYellow } from "./constants.ts"
import ArrowD from "../../assets/images/Arrow/arrow.svg?react"

export const ArrowDown = ({ value }: TileProps) => {
  return (
    <div className={cx(labelStyleYellow, "relative")}>
      <ArrowD className="h-full rotate-180 text-orange-600" />
      <span className="absolute flex text-center m-auto left-0 top-0 items-center justify-center h-full w-full">
        {value}
      </span>
    </div>
  )
}
