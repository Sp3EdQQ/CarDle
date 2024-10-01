import { useMutation } from "@tanstack/react-query"
import { defaultApiHeaders } from "../config/apiConfig.ts"
import { GetTrimsResponse } from "../types/trims.ts"

type FetchTrimsProps = {
  make: string | undefined
  model: string | undefined
}

const fetchTrims = async ({
  make,
  model
}: FetchTrimsProps): Promise<GetTrimsResponse> => {
  return await fetch(
    `https://car-api2.p.rapidapi.com/api/trims?direction=asc&sort=id&year=2019&model=${model}&make=${make}`,
    defaultApiHeaders
  ).then(res => res.json())
}

export const useTrimMutation = (setTrims: (trims: GetTrimsResponse["data"]) => void) => {
  return useMutation({
    mutationFn: fetchTrims,
    onSuccess: data => setTrims(data?.data)
  })
}
