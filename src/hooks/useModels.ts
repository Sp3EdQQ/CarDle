import type { GetModelsResponse } from "../types/models.ts"
import { defaultApiHeaders } from "../config/apiConfig.ts"
import { useQuery } from "@tanstack/react-query"

const fetchModels = async (make: string | undefined): Promise<GetModelsResponse> => {
  return await fetch(
    `https://car-api2.p.rapidapi.com/api/models?sort=id&make=${make}&year=2019&direction=asc`,
    defaultApiHeaders
  ).then(res => res.json())
}

export const useModels = (make: string | undefined) => {
  return useQuery<GetModelsResponse>({
    queryKey: ["Models"],
    queryFn: () => fetchModels(make),
    enabled: !!make
  })
}
