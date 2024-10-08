import { cx } from "@/utils/cx"

export const defaultLabelStyle =
  "rounded-lg lg:max-w-32 max-w-28 min-w-20 lg:max-h-32 max-h-28 min-h-20 w-full content-center text-center uppercase shrink-0"
export const labelStyleGreen = cx(defaultLabelStyle, "bg-green-600")
export const labelStyleRed = cx(defaultLabelStyle, "bg-red-500")
export const labelStyleYellow = cx(defaultLabelStyle, "bg-orange-500")
export const labelStyleBlack = cx(defaultLabelStyle, "bg-black bg-opacity-30")
