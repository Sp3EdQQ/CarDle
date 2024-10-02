import { SearchBar } from "./components/SearchBar"
import { CarAttributes } from "./components/CarAttributes"
import { ColorsLegend } from "./components/ColorsLegend"
import MainLogo from "./assets/images/Logo/logo-no-background.svg?react"
import { useEffect, useState } from "react"
import { GetCarInfo, GetCarInfoImportant } from "./types/carInfo"
import { useRandomCar } from "./hooks/useRandomCar"
import { GenerateRandomCarButton } from "./components/RandomButton.tsx"
import Background from "./assets/images/Background/bg.webp"

const App = () => {
  const [carInfo, setCarInfo] = useState<GetCarInfo[]>([])
  const { randomCar, resetRandomSelection } = useRandomCar()
  const [localStorageHand, setLocalStorageHand] = useState<GetCarInfoImportant | null>(
    null
  )
  const [isWin, setIsWin] = useState<boolean>(false)

  const handleCar = () => {
    resetRandomSelection()
    window.location.reload()
  }

  useEffect(() => {
    const savedCar = localStorage.getItem("randomCar")
    if (savedCar) setLocalStorageHand(JSON.parse(savedCar))
    if (!savedCar) {
      resetRandomSelection()
    }
  }, [randomCar])

  console.log(isWin)
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="bg-fixed bg-cover min-h-dvh gap-y-5 flex flex-col items-center text-slate-50"
    >
      <MainLogo className="size-1/3 my-3" />
      <ColorsLegend />
      <GenerateRandomCarButton onClick={handleCar} />
      <SearchBar setCarInfo={setCarInfo} />
      <CarAttributes setIsWin={setIsWin} randomCar={localStorageHand} carInfo={carInfo} />
    </div>
  )
}

export default App
