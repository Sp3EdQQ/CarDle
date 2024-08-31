import { useMutation } from "@tanstack/react-query"
import { defaultApiHeaders } from "../config/apiConfig"
import type { GetCarInfo } from "../types/carInfo"

const fetchParam = async (trimId: number | undefined): Promise<GetCarInfo> => {
  return await fetch(
    `https://car-api2.p.rapidapi.com/api/trims/${trimId}`,
    defaultApiHeaders
  ).then(res => res.json())
}

export const useParamMutation = (setCarInfo: (data: GetCarInfo) => void) => {
  return useMutation({
    mutationFn: fetchParam,
    onSuccess: data => setCarInfo(data)
  })
}
