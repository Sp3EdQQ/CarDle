import { cx } from "../utils/cx.ts"

const labels = ["Brand", "Model", "Horsepower", "Year", "Drive"]
const attributesArray = [
  { brand: "Toyota", model: "Supra", hp: 300, year: 2019, drive: "RWD" },
  { brand: "Honda", model: "Civic", hp: 158, year: 2020, drive: "FWD" }
  // { brand: "Ford", model: "Mustang", hp: 450, year: 2021, drive: "RWD" },
  // { brand: "Chevrolet", model: "Camaro", hp: 275, year: 2019, drive: "RWD" },
  // { brand: "BMW", model: "M3", hp: 473, year: 2021, drive: "RWD" },
  // { brand: "Audi", model: "A4", hp: 248, year: 2020, drive: "AWD" },
  // { brand: "Mercedes-Benz", model: "C-Class", hp: 255, year: 2021, drive: "RWD" },
  // { brand: "BMW", model: "M3", hp: 473, year: 2021, drive: "RWD" },
  // { brand: "Audi", model: "A4", hp: 248, year: 2020, drive: "AWD" },
  // { brand: "BMW", model: "M3", hp: 473, year: 2021, drive: "RWD" },
  // { brand: "Audi", model: "A4", hp: 248, year: 2020, drive: "AWD" },
  // { brand: "BMW", model: "M3", hp: 473, year: 2021, drive: "RWD" },
  // { brand: "Audi", model: "A4", hp: 248, year: 2020, drive: "AWD" },
  // { brand: "BMW", model: "M3", hp: 473, year: 2021, drive: "RWD" },
  // { brand: "Audi", model: "A4", hp: 248, year: 2020, drive: "AWD" }
]

const attributesLabelsClasses =
  " rounded-t-lg grid grid-cols-5 w-full max-w-screen-xl text-lg font-bold py-7 *:text-center"
const attributesStyle = "grid grid-cols-5 w-full max-w-screen-xl"

const defaultLabelStyle =
  "rounded-lg aspect-square w-full max-w-24 content-center text-center text-lg mx-auto"
const labelStyleGreen = cx(defaultLabelStyle, "bg-green-500")
const labelStyleRed = cx(defaultLabelStyle, "bg-red-500")
const labelStyleYellow = cx(defaultLabelStyle, "bg-yellow-500")

export const CarAttributes = () => {
  return (
    <div className="flex flex-col gap-y-5 backdrop-blur pb-6">
      <div className={attributesLabelsClasses}>
        {labels.map(label => {
          return <div key={label}>{label}</div>
        })}
      </div>
      <div className="flex flex-col w-full gap-y-4">
        {attributesArray.map(({ brand, model, hp, year, drive }, index) => {
          return (
            <div key={index} className={attributesStyle}>
              <div className={labelStyleGreen}>{brand}</div>
              <div className={labelStyleRed}>{model}</div>
              <div className={labelStyleYellow}>{hp}</div>
              <div className={labelStyleRed}>{year}</div>
              <div className={labelStyleGreen}>{drive}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
