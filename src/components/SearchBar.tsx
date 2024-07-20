import { useMutation, useQuery } from "@tanstack/react-query"
import { GetMakesRespone } from "../types/makes.ts"
import { useState } from "react"
import { Model } from "../types/models.ts"
import Select from "react-select"

const buttonClasses = "rounded-md bg-rose-600 text-white py-1 px-2"
const inputTextClasses = "rounded-md text-black py-2 px-2"

export const SearchBar = () => {
  const [selectedMake, setSelectedMake] = useState<
    { label: string; value: string } | undefined
  >()
  const [models, setModels] = useState<Model[] | undefined>()

  const { data: makesResponse } = useQuery<GetMakesRespone>({
    queryKey: ["Makes"],
    queryFn: () =>
      fetch("https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id", {
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "car-api2.p.rapidapi.com",
          "x-rapidapi-key": "72ac09f5c9msh0fdffaeb3d80863p1f7de0jsn77474ab74da6"
        }
      }).then(res => res.json())
  })

  const mutation = useMutation({
    mutationFn: () =>
      fetch(
        `https://car-api2.p.rapidapi.com/api/models?sort=id&make=${selectedMake?.value}&year=2019&direction=asc`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "car-api2.p.rapidapi.com",
            "x-rapidapi-key": "72ac09f5c9msh0fdffaeb3d80863p1f7de0jsn77474ab74da6"
          }
        }
      ).then(res => res.json()),
    onSuccess: data => setModels(data?.data)
  })

  const handleModelOnChange = (option: { label: string; value: string }) => {
    setSelectedMake(option)
    mutation.mutate()
  }

  const makeOptions = makesResponse?.data.map(({ name }) => ({
    label: name,
    value: name
  }))

  const modelOptions = models?.map(({ name }) => ({
    label: name,
    value: name
  }))

  return (
    <div className="flex gap-x-3">
      <Select
        className="text-black"
        options={makeOptions}
        onChange={handleModelOnChange}
      />
      <Select className="text-black" options={modelOptions} />
      <button className={buttonClasses}>Check</button>
    </div>
  )
}
