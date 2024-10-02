import { GetCarInfo, GetCarInfoImportant } from "../types/carInfo"
import { useEffect } from "react"
import { GuessTile } from "./UtilityComponents/GuessTile.tsx"
import { comparisonGuessCars } from "../utils/comparisonGuessCars.ts"

const labels = ["Brand", "Model", "Horsepower", "Torque", "Cylinders", "Drive"]
const attributesLabelsClasses =
  "rounded-t-lg grid grid-cols-6 w-full max-w-screen-xl text-lg font-bold py-7 *:text-center"
const attributesStyle = "grid grid-cols-6 max-w-screen-xl *:mx-1"

export const CarAttributes = ({
  carInfo,
  randomCar,
  setIsWin
}: {
  randomCar: GetCarInfoImportant | null
  carInfo: GetCarInfo[]
  setIsWin: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  useEffect(() => {
    if (comparisonGuessCars(carInfo[carInfo.length - 1], randomCar)) {
      setIsWin(true)
    }
  }, [carInfo.length])

  return (
    <div className="flex flex-col gap-y-5 backdrop-blur pb-6 text-shadow">
      <div className={attributesLabelsClasses}>
        {labels.map(label => {
          return <div key={label}>{label}</div>
        })}
      </div>
      <div className="flex flex-col w-full gap-y-4">
        {carInfo.map(({ make_model, make_model_trim_engine }, index) => {
          return (
            <div key={index} className={attributesStyle}>
              <GuessTile
                expectedValue={randomCar?.make || ""}
                value={make_model?.make?.name}
              />
              <GuessTile expectedValue={randomCar?.model || ""} value={make_model.name} />

              <GuessTile
                expectedValue={randomCar?.horsepower || ""}
                value={make_model_trim_engine.horsepower_hp}
              />

              <GuessTile
                expectedValue={randomCar?.torque || ""}
                value={make_model_trim_engine.torque_rpm}
              />

              <GuessTile
                expectedValue={randomCar?.cylinders || ""}
                value={make_model_trim_engine.cylinders}
              />

              <GuessTile
                expectedValue={randomCar?.drive || ""}
                value={make_model_trim_engine.drive_type}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
