import {ArrowUp, ArrowDown, Correct, InCorrect, Undefined} from "@/components/Tiles"

type GuessTileProps = {
  expectedValue: string | number
  value: string | number
}

export const GuessTile = ({ expectedValue, value }: GuessTileProps) => {
  if (typeof value === "number" && typeof expectedValue === "number") {
    if (value < expectedValue) {
      return <ArrowUp value={value} />
    }
    if (value > expectedValue) {
      return <ArrowDown value={value} />
    }
    return <Correct value={value} />
  }
  if (typeof value === "string" && typeof expectedValue === "string") {
    if (value === expectedValue) {
      return <Correct value={value} />
    } else {
      return <InCorrect value={value} />
    }
  }
  return <Undefined />
}
