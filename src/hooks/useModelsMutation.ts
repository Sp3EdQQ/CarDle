import { useMutation } from "@tanstack/react-query"
import { defaultApiHeaders } from "../config/apiConfig"
import type { GetModelsResponse } from "../types/models"

const fetchModels = async (make: string): Promise<GetModelsResponse> => {
  return await fetch(
    `https://car-api2.p.rapidapi.com/api/models?sort=id&make=${make}&year=2019&direction=asc`,
    defaultApiHeaders
  ).then(res => res.json())
}

export const useModelsMutation = (
  setModels: (models: GetModelsResponse["data"]) => void
) => {
  return useMutation({
    mutationFn: fetchModels,
    onSuccess: data => setModels(data?.data)
  })
}
