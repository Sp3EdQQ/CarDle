import { useEffect, useState } from "react"
import { GetCarInfo, GetCarInfoImportant } from "../types/carInfo"
import { Trim } from "../types/trims"
import { useParamMutation } from "./useParamMutation"
import { useMakes } from "./useMakes"
import { Model } from "../types/models"
import { useModelsMutation } from "./useModelsMutation"
import { useTrimMutation } from "./useTrimMutation"

export const useRandomCar = () => {
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedTrim, setSelectedTrim] = useState<Trim | undefined>()
  const [randomCar, setRandomCar] = useState<GetCarInfoImportant | null>(null)

  const getRandomCar = (data: GetCarInfo) => {
    if (
      !data.make_model ||
      !data.make_model.make.name ||
      !data.make_model.name ||
      !data.make_model_trim_engine.horsepower_hp ||
      !data.make_model_trim_engine.torque_rpm ||
      !data.make_model_trim_engine.cylinders ||
      !data.make_model_trim_engine.drive_type
    ) {
      resetRandomSelection()
    }

    setRandomCar({
      make: data.make_model.make.name,
      model: data.make_model.name,
      year: data.year,
      horsepower: data.make_model_trim_engine.horsepower_hp,
      torque: data.make_model_trim_engine.torque_rpm,
      cylinders: data.make_model_trim_engine.cylinders,
      drive: data.make_model_trim_engine.drive_type
    })
  }

  const resetRandomSelection = () => {
    const randomMake = getRandomMake()
    if (randomMake) {
      setSelectedMake(randomMake)
      modelsMutation.mutate(randomMake)
      localStorage.setItem("randomCar", JSON.stringify(randomCar))
    }
  }

  const { data: makesResponse } = useMakes()

  const getRandomMake = () => {
    const makes = makesResponse?.data.map(({ name }) => name) ?? []
    const randomMakesIndex = Math.floor(Math.random() * makes.length)
    return makes[randomMakesIndex]
  }

  const getRandomModel = (models: Model[]) => {
    const modelsNames = models?.map(({ name }) => name)
    const randomModelsIndex = Math.floor(Math.random() * modelsNames?.length)
    const randomModel = modelsNames?.[randomModelsIndex]
    if (randomModel) setSelectedModel(randomModel)
  }

  const getRandomTrim = (trims: Trim[]) => {
    const randomTrimIndex = Math.floor(Math.random() * trims?.length)
    const randomTrim = trims[randomTrimIndex]
    setSelectedTrim(randomTrim)
  }

  const modelsMutation = useModelsMutation(getRandomModel)
  const trimMutation = useTrimMutation(getRandomTrim)
  const paramMutation = useParamMutation(getRandomCar)

  useEffect(() => {
    const randomMake = getRandomMake()
    if (randomMake) {
      setSelectedMake(randomMake)
      modelsMutation.mutate(randomMake)
    }
  }, [makesResponse])

  useEffect(() => {
    if (selectedMake && selectedModel) {
      trimMutation.mutate({ make: selectedMake, model: selectedModel })
    }
  }, [selectedModel])

  useEffect(() => {
    if (selectedTrim?.id) paramMutation.mutate(selectedTrim?.id)
  }, [selectedTrim])
  return { randomCar, resetRandomSelection }
}
