import { GetCarInfo, GetCarInfoImportant } from "@/types"
import React, { useEffect } from "react"
import { GuessTile } from "./UtilityComponents/GuessTile"
import { comparisonGuessCars } from "../utils/comparisonGuessCars"

const labels = ["Brand", "Model", "Horsepower", "Torque", "Cylinders", "Drive"]

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
    <div className="flex flex-col text-shadow w-full px-4 md:items-start">
      <div className="overflow-x-auto rounded-xl w-full max-w-[56rem] pb-4 mx-auto backdrop-blur flex flex-col md:justify-between md:overflow-x-hidden ">
        <div className="flex gap-x-3 font-bold py-7 md:justify-center lg:text-lg *:text-center">
          {labels.map(label => {
            return (
              <div className="min-w-20 lg:max-w-32 max-w-28 shrink-0 w-full" key={label}>
                {label}
              </div>
            )
          })}
        </div>
        <div className="flex flex-col w-full gap-y-4">
          {carInfo.map(({ make_model, make_model_trim_engine }, index) => {
            return (
              <div key={index} className="flex gap-x-3 w-full md:justify-center">
                <GuessTile
                  expectedValue={randomCar?.make || ""}
                  value={make_model?.make?.name}
                />
                <GuessTile
                  expectedValue={randomCar?.model || ""}
                  value={make_model.name}
                />

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
    </div>
  )
}
