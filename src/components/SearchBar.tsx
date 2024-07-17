import { useQuery } from "@tanstack/react-query"
import { GetMakesRespone } from "../types/makes.ts"
import { GetModelsResponse } from "../types/models.ts"

export const SearchBar = () => {
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
  const { data: modelsResponse } = useQuery<GetModelsResponse>({
    queryKey: ["Models"],
    queryFn: () =>
      fetch(
        "https://car-api2.p.rapidapi.com/api/models?sort=id&direction=asc&year=2020",
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "car-api2.p.rapidapi.com",
            "x-rapidapi-key": "72ac09f5c9msh0fdffaeb3d80863p1f7de0jsn77474ab74da6"
          }
        }
      ).then(res => res.json())
  })
  console.log(makesResponse)

  const buttonClasses = "rounded-md bg-rose-600 text-white py-1 px-2"
  const inputTextClasses = "rounded-md text-black py-2 px-2"

  return (
    <div className="flex gap-x-3">
      <input type="text" placeholder="Brand" className={inputTextClasses} />

      <input type="text" placeholder="Model" className={inputTextClasses} />
      <button className={buttonClasses}>Check</button>
    </div>
  )
}
