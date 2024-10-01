import { GetTrimsResponse } from "../types/trims.ts"
import { defaultApiHeaders } from "../config/apiConfig.ts"
import { useQuery } from "@tanstack/react-query"

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

export const useTrims = (make: string | undefined, model: string | undefined) => {
  return useQuery<GetTrimsResponse>({
    queryKey: ["Trims"],
    queryFn: () => fetchTrims({ make, model }),
    enabled: !!make && !!model
  })
}
