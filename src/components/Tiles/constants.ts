import { cx } from "../../utils/cx.ts"

export const defaultLabelStyle =
  "rounded-lg aspect-square w-full max-w-32 content-center text-center text-lg mx-auto uppercase"
export const labelStyleGreen = cx(defaultLabelStyle, "bg-green-600")
export const labelStyleRed = cx(defaultLabelStyle, "bg-red-500")
export const labelStyleYellow = cx(defaultLabelStyle, "bg-orange-500")
