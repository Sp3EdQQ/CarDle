import { cx } from "../../utils/cx.ts"

export const defaultLabelStyle =
  "rounded-lg max-w-32 content-center text-center text-lg mx-auto uppercase aspect-square"
export const labelStyleGreen = cx(defaultLabelStyle, "bg-green-600")
export const labelStyleRed = cx(defaultLabelStyle, "bg-red-500")
export const labelStyleYellow = cx(defaultLabelStyle, "bg-orange-500")
export const labelStyleBlack = cx(defaultLabelStyle, "bg-black bg-opacity-30")
