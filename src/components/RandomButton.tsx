import { ButtonHTMLAttributes, forwardRef } from "react"

type GenerateRandomCarButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const GenerateRandomCarButton = forwardRef<
  HTMLButtonElement,
  GenerateRandomCarButtonProps
>(({ ...restProps }, ref) => {
  return (
    <button
      ref={ref}
      {...restProps}
      className="bg-gradient-to-r from-violet-600 to-purple-600 p-3 rounded-md"
    >
      Randomise Car
    </button>
  )
})
