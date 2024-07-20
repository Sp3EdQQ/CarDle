import { useMutation, useQuery } from "@tanstack/react-query"
import { GetMakesRespone, Make } from "../types/makes.ts"
import { ChangeEvent, useState } from "react"
import { Model } from "../types/models.ts"

const buttonClasses = "rounded-md bg-rose-600 text-white py-1 px-2"
const inputTextClasses = "rounded-md text-black py-2 px-2"

export const SearchBar = () => {
  const [make, setMake] = useState<Make | undefined>()
  const [models, setModels] = useState<Model[] | undefined>()

  const { data: makesResponse } = useQuery<GetMakesRespone>({
    queryKey: ["Makes"],
    queryFn: () =>
      fetch("https://car-api2.p.rapidapi.com/api/makes?direction=desc&sort=id", {
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
        `https://car-api2.p.rapidapi.com/api/models?sort=id&make=${make?.name}&year=2019&direction=asc`,
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

  const handleMakeOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMake(
      makesResponse?.data.filter(({ name }) =>
        name.toLowerCase().startsWith(event.target.value.toLowerCase())
      )[0]
    )
    mutation.mutate()
  }

  const handleModelOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(
      models?.filter(({ name }) =>
        name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    )
  }

  console.log(make)
  console.log(models)

  return (
    <div className="flex gap-x-3">
      <input
        type="text"
        placeholder="Brand"
        className={inputTextClasses}
        onChange={handleMakeOnChange}
      />

      <input
        type="text"
        placeholder="Model"
        className={inputTextClasses}
        onChange={handleModelOnChange}
      />
      <button className={buttonClasses}>Check</button>
    </div>
  )
}
