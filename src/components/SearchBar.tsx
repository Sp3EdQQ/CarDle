import { Dispatch, SetStateAction, useState } from "react"
import { Model } from "../types/models"
import Select from "react-select"
import { Trim } from "../types/trims"
import { useMakes } from "../hooks/useMakes"
import { useModelsMutation } from "../hooks/useModelsMutation"
import { useTrimMutation } from "../hooks/useTrimMutation"
import { useParamMutation } from "../hooks/useParamMutation"
import { GetCarInfo } from "../types/carInfo"

const buttonClasses = "rounded-md bg-rose-600 text-white py-1 px-2"
type SelectOption = {
  label: string
  value: string
}
type SearchBarProps = {
  setCarInfo: Dispatch<SetStateAction<GetCarInfo[]>>
}

export const SearchBar = ({ setCarInfo }: SearchBarProps) => {
  const [selectedMake, setSelectedMake] = useState<SelectOption | undefined>()
  const [models, setModels] = useState<Model[] | undefined>()
  const [trims, setTrims] = useState<Trim[] | undefined>()

  const { data: makesResponse } = useMakes()
  const modelsMutation = useModelsMutation(setModels)
  const trimsMutation = useTrimMutation(setTrims)
  const paramMutation = useParamMutation(setCarInfo)
  const [selectedTrim, setSelectedTrim] = useState<
    { label: string; value: number } | undefined
  >()

  const handleMakeOnChange = (option: SelectOption) => {
    setSelectedMake(option)
    modelsMutation.mutate(option.value)
  }
  const handleModelOnChange = (option: SelectOption) => {
    trimsMutation.mutate({ make: selectedMake?.value, model: option.value })
  }
  const handleTrimOnChange = (option: { label: string; value: number }) => {
    setSelectedTrim(option)
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
    <div className="flex gap-x-3">
      <Select
        className="text-black"
        options={makeOptions}
        onChange={handleMakeOnChange}
      />
      <Select
        className="text-black"
        options={modelOptions}
        onChange={handleModelOnChange}
      />
      {
        <Select
          className="text-black"
          options={trimOptions}
          onChange={handleTrimOnChange}
        />
      }
      <button
        className={buttonClasses}
        onClick={() => paramMutation.mutate(selectedTrim?.value)}
      >
        Check
      </button>
    </div>
  )
}
