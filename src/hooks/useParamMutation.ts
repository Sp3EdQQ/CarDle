import { useMutation } from "@tanstack/react-query"
import { defaultApiHeaders } from "../config/apiConfig"
import type { GetCarInfo } from "../types/carInfo"
import { Dispatch, SetStateAction } from "react"

const fetchParam = async (trimId: number | undefined): Promise<GetCarInfo> => {
  return await fetch(
    `https://car-api2.p.rapidapi.com/api/trims/${trimId}`,
    defaultApiHeaders
  ).then(res => res.json())
}

export const useParamMutation = (setCarInfo: Dispatch<SetStateAction<GetCarInfo[]>>) => {
  return useMutation({
    mutationFn: fetchParam,
    onSuccess: data => setCarInfo(prev => [...prev, data])
  })
}
