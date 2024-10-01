import { Dispatch, SetStateAction, useState } from "react"
import { Model } from "../types/models"
import Select, { SingleValue } from "react-select"
import { Trim } from "../types/trims"
import { useMakes } from "../hooks/useMakes"
import { useModelsMutation } from "../hooks/useModelsMutation"
import { useTrimMutation } from "../hooks/useTrimMutation"
import { useParamMutation } from "../hooks/useParamMutation"
import { GetCarInfo } from "../types/carInfo"

type SelectMakeOption = {
  label: string
  value: string
}
type SelectModelOption = {
  label: string
  value: string
}
type SelectTrimOption = {
  label: string
  value: number
}

type SearchBarProps = {
  setCarInfo: Dispatch<SetStateAction<GetCarInfo[]>>
}

export const SearchBar = ({ setCarInfo }: SearchBarProps) => {
  const getCustomSetCarInfo = (data: GetCarInfo) => setCarInfo(prev => [...prev, data])

  const [selectedMake, setSelectedMake] = useState<SelectMakeOption | undefined | null>()
  const [selectedModel, setSelectedModel] = useState<
    SelectModelOption | undefined | null
  >()
  const [selectedTrim, setSelectedTrim] = useState<SelectTrimOption | undefined | null>()

  const { data: makesResponse } = useMakes()
  const [models, setModels] = useState<Model[] | undefined>()
  const [trims, setTrims] = useState<Trim[] | undefined>()

  const modelsMutation = useModelsMutation(setModels)
  const trimsMutation = useTrimMutation(setTrims)
  const paramMutation = useParamMutation(getCustomSetCarInfo)

  const handleMakeOnChange = (newValue: SingleValue<SelectMakeOption> | null) => {
    if (newValue) {
      setSelectedModel(null)
      setSelectedTrim(null)
      setSelectedMake(newValue)
      modelsMutation.mutate(newValue.value)
    }
  }

  const handleModelOnChange = (newValue: SingleValue<SelectModelOption> | null) => {
    if (newValue) {
      setSelectedTrim(null)
      setSelectedModel(newValue)
      trimsMutation.mutate({ make: selectedMake?.value, model: newValue.value })
    }
  }

  const handleTrimOnChange = (newValue: SingleValue<SelectTrimOption> | null) => {
    if (newValue) {
      setSelectedTrim(newValue)
    }
  }

  const makeOptions = makesResponse?.data.map(({ name }) => ({
    label: name,
    value: name
  }))

  const modelOptions = models?.map(({ name }) => ({
    label: name,
    value: name
  }))

  const trimOptions = trims?.map(({ description, id }) => ({
    label: description,
    value: id
  }))

  return (
    <div className="flex gap-x-3 text-black">
      <Select options={makeOptions} onChange={handleMakeOnChange} value={selectedMake} />
      <Select
        options={modelOptions}
        onChange={handleModelOnChange}
        value={selectedModel}
      />
      <Select options={trimOptions} onChange={handleTrimOnChange} value={selectedTrim} />
      <button
        className="rounded-md bg-gradient-to-r from-violet-600 to-purple-600 text-white py-1 px-2"
        onClick={() => {
          paramMutation.mutate(selectedTrim?.value)
          setSelectedMake(null)
          setSelectedModel(null)
          setSelectedTrim(null)
        }}
      >
        Check
      </button>
    </div>
  )
}
