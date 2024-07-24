import { useQuery } from "@tanstack/react-query"
import type { GetMakesRespone } from "../types/makes"
import { defaultApiHeaders } from "../config/apiConfig"

const fetchMakes = async (): Promise<GetMakesRespone> => {
  return await fetch(
    "https://car-api2.p.rapidapi.com/api/makes?direction=asc&year=2019&sort=id",
    defaultApiHeaders
  ).then(res => res.json())
}

export const useMakes = () => {
  return useQuery<GetMakesRespone>({
    queryKey: ["Makes"],
    queryFn: () => fetchMakes()
  })
}
