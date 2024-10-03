import { useEffect, useState } from "react"
import { GetCarInfo, GetCarInfoImportant } from "./types/carInfo"
import { useRandomCar } from "@/hooks"
import { GenerateRandomCarButton, ColorsLegend, CarAttributes, SearchBar } from "@/components"
import Background from "./assets/images/bg.webp"
import MainLogo from "./assets/images/logo-no-background.svg?react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog"

const App = () => {
  const [carInfo, setCarInfo] = useState<GetCarInfo[]>([])
  const { randomCar, resetRandomSelection } = useRandomCar()
  const [localStorageStash, setLocalStorageStash] = useState<GetCarInfoImportant | null>(
    null
  )
  const [isWin, setIsWin] = useState<boolean>(false)

  const handleCar = () => {
    resetRandomSelection()
    window.location.reload()
  }

  useEffect(() => {
    const savedCar = localStorage.getItem("randomCar")
    if (savedCar) setLocalStorageStash(JSON.parse(savedCar))
    if (!savedCar) {
      resetRandomSelection()
    }
  }, [randomCar])

  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="bg-fixed bg-cover min-h-dvh gap-y-5 flex flex-col items-center text-slate-50"
    >
      <MainLogo className="size-1/3 my-3" />
      <ColorsLegend />
      <GenerateRandomCarButton onClick={handleCar} />
      <SearchBar setCarInfo={setCarInfo} />
      <CarAttributes setIsWin={setIsWin} randomCar={localStorageStash} carInfo={carInfo} />
      <AlertDialog open={isWin} onOpenChange={setIsWin}>
        <AlertDialogContent className="bg-neutral-800 text-white border border-neutral-400">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold">
              Congratulations!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white">
              You have correcty guessed a car! Do you want to start a new game?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setIsWin(false)}
              className="bg-red-500 hover:bg-red-700 hover:text-white border-0 px-6 py-2 "
            >
              No
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleCar}
              className="bg-green-500 hover:bg-green-700 px-6 py-2 "
            >
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default App
