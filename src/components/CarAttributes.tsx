import { GetCarInfo, GetCarInfoImportant } from "../types/carInfo"
import { useEffect, useState } from "react"
import { GuessTile } from "./GuessTile"

const labels = ["Brand", "Model", "Year", "Horsepower", "Torque", "Cylinders", "Drive"]

const attributesLabelsClasses =
  "rounded-t-lg grid grid-cols-7 w-full max-w-screen-xl text-lg font-bold py-7 *:text-center"
const attributesStyle = "grid grid-cols-7 max-w-screen-xl *:mx-1"

export const CarAttributes = ({ carInfo }: { carInfo: GetCarInfo[] }) => {
  const [RandomisedCar, setRandomisedCar] = useState<GetCarInfoImportant | null>(null)

  useEffect(() => {
    const randomCar = localStorage.getItem("randomCar")
    if (randomCar) {
      setRandomisedCar(JSON.parse(randomCar))
    }
  }, [])

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
              <GuessTile
                expectedValue={RandomisedCar?.make || ""}
                value={make_model?.make?.name}
              />
              <GuessTile
                expectedValue={RandomisedCar?.model || ""}
                value={make_model.name}
              />

              <GuessTile expectedValue={RandomisedCar?.year || ""} value={year} />

              <GuessTile
                expectedValue={RandomisedCar?.horsepower || ""}
                value={make_model_trim_engine.horsepower_hp}
              />

              <GuessTile
                expectedValue={RandomisedCar?.torque || ""}
                value={make_model_trim_engine.torque_rpm}
              />

              <GuessTile
                expectedValue={RandomisedCar?.cylinders || ""}
                value={make_model_trim_engine.cylinders}
              />

              <GuessTile
                expectedValue={RandomisedCar?.drive || ""}
                value={make_model_trim_engine.drive_type}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
