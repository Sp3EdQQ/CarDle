import { GetCarInfo, GetCarInfoImportant } from "../types/carInfo.ts"

export const comparisonGuessCars = (
  carInfo: GetCarInfo,
  randomCar: GetCarInfoImportant | null
) => {
  if (
    carInfo !== undefined &&
    randomCar !== null &&
    carInfo?.make_model.make.name === randomCar?.make &&
    carInfo?.make_model.name === randomCar?.model &&
    carInfo?.make_model_trim_engine.horsepower_hp === randomCar?.horsepower &&
    carInfo?.make_model_trim_engine.torque_rpm === randomCar?.torque &&
    carInfo?.make_model_trim_engine.cylinders === randomCar?.cylinders &&
    carInfo?.make_model_trim_engine.drive_type === randomCar?.drive
  ) {
    return true
  }
  return false
}
