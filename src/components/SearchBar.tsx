import { Dispatch, SetStateAction, useState } from "react"
import Select, { SingleValue } from "react-select"
import { useMakes, useModelsMutation, useParamMutation, useTrimMutation } from "@/hooks"
import { GetCarInfo, Model, Trim } from "@/types"

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
    <div className="flex flex-col items-center text-black gap-3 lg:flex-row">
      <Select
        className="md:w-52"
        options={makeOptions}
        onChange={handleMakeOnChange}
        value={selectedMake}
      />
      <Select
        className="md:min-w-52 md:max-w-80"
        options={modelOptions}
        onChange={handleModelOnChange}
        value={selectedModel}
      />
      <Select
        className="md:min-w-72 md:max-w-80"
        options={trimOptions}
        onChange={handleTrimOnChange}
        value={selectedTrim}
      />
      <button
        // disabled same gradient bcs gradient overwrite disabled class while disabled lmao
        className="disabled:from-gray-800 disabled:to-gray-800 rounded-md bg-gradient-to-r from-violet-600 to-purple-600 text-white p-2 max-w-20"
        disabled={!selectedMake || !selectedModel || !selectedTrim}
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
