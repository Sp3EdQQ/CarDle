import { labelStyleBlack } from "./constants.ts"
import QuestionMark from "../../assets/images/Tiles/questionMark.svg?react"

export const Undefined = () => {
  return (
    <div className={labelStyleBlack}>
      <QuestionMark />
      <div>undefined</div>
    </div>
  )
}
