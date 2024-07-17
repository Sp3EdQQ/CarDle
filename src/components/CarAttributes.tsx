import { cx } from "../utils/cx"
import { useQuery } from "@tanstack/react-query"
import { ApiResponse } from "../types/test.ts"

const labels = ["Brand", "Model", "Class", "Drive", "Cylinders", "Year"]

const attributesLabelsClasses =
  "rounded-t-lg grid grid-cols-6 w-full max-w-screen-xl text-lg font-bold py-7 *:text-center"
const attributesStyle = "grid grid-cols-6 w-full max-w-screen-xl *:mx-1"

const defaultLabelStyle =
  "rounded-lg aspect-square w-full max-w-32 content-center text-center text-lg mx-auto uppercase"
const labelStyleGreen = cx(defaultLabelStyle, "bg-green-600")
const labelStyleRed = cx(defaultLabelStyle, "bg-red-500")
const labelStyleYellow = cx(defaultLabelStyle, "bg-orange-500")

export const CarAttributes = () => {
  const { data } = useQuery<ApiResponse>({
    queryKey: ["QueryCars"],
    queryFn: () =>
      fetch("https://api.api-ninjas.com/v1/cars?limit10&make=bmw", {
        headers: {
          "X-API-KEY": import.meta.env.VITE_API_KEY
        }
      }).then(res => res.json())
  })

  return (
    <div className="flex flex-col gap-y-5 backdrop-blur pb-6 text-shadow">
      <div className={attributesLabelsClasses}>
        {labels.map(label => {
          return <div key={label}>{label}</div>
        })}
      </div>
      <div className="flex flex-col w-full gap-y-4">
        {data?.map(({ make, model, class: type, year, drive, cylinders }, index) => {
          return (
            <div key={index} className={attributesStyle}>
              <div className={labelStyleGreen}>{make}</div>
              <div className={labelStyleRed}>{model}</div>
              <div className={labelStyleYellow}>{type}</div>
              <div className={labelStyleGreen}>{drive}</div>
              <div className={labelStyleRed}>{cylinders}</div>
              <div className={labelStyleRed}>{year}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
