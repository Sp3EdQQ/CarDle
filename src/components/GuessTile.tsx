import { ArrowUp } from "./Tiles/ArrowUp.tsx"
import { ArrowDown } from "./Tiles/ArrowDown.tsx"
import { Correct } from "./Tiles/Correct.tsx"
import { InCorrect } from "./Tiles/InCorrect.tsx"

type GuessTileProps = {
  expectedValue: string | number | undefined
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
  if (value === expectedValue) {
    return <Correct value={value} />
  }
  return <InCorrect value={value} />
}
