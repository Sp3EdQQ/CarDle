import { cx } from "../utils/cx"
import { GetCarInfo } from "../types/carInfo"

const labels = ["Brand", "Model", "Year", "Horsepower", "Torque", "Cylinders", "Drive"]

const attributesLabelsClasses =
  "rounded-t-lg grid grid-cols-7 w-full max-w-screen-xl text-lg font-bold py-7 *:text-center"
const attributesStyle = "grid grid-cols-7 w-full max-w-screen-xl *:mx-1"
const defaultLabelStyle =
  "rounded-lg aspect-square w-full max-w-32 content-center text-center text-lg mx-auto uppercase"
const labelStyleGreen = cx(defaultLabelStyle, "bg-green-600")
const labelStyleRed = cx(defaultLabelStyle, "bg-red-500")
const labelStyleYellow = cx(defaultLabelStyle, "bg-orange-500")

export const CarAttributes = ({ carInfo }: { carInfo: GetCarInfo[] }) => {
  return (
    <div className="flex flex-col gap-y-5 backdrop-blur pb-6 text-shadow">
      <div className={attributesLabelsClasses}>
        {labels.map(label => {
          return <div key={label}>{label}</div>
        })}
      </div>
      <div className="flex flex-col w-full gap-y-4">
        {carInfo.map(({ make_model, year, make_model_trim_engine }, index) => {
          return (
            <div key={index} className={attributesStyle}>
              <div className={labelStyleGreen}>{make_model.make.name}</div>
              <div className={labelStyleRed}>{make_model.name}</div>
              <div className={labelStyleYellow}>{year}</div>
              <div className={labelStyleGreen}>
                {make_model_trim_engine.horsepower_hp}
              </div>
              <div className={labelStyleRed}>{make_model_trim_engine.torque_rpm}</div>
              <div className={labelStyleGreen}>{make_model_trim_engine.cylinders}</div>
              <div className={labelStyleYellow}>{make_model_trim_engine.drive_type}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
