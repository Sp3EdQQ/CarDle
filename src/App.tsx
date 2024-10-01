import { SearchBar } from "./components/SearchBar"
import { CarAttributes } from "./components/CarAttributes"
import { ColorsLegend } from "./components/ColorsLegend"
import MainLogo from "./assets/images/Logo/logo-no-background.svg?react"
import { useEffect, useState } from "react"
import { GetCarInfo } from "./types/carInfo"
import { useRandomCar } from "./hooks/useRandomCar"

const App = () => {
  const [carInfo, setCarInfo] = useState<GetCarInfo[]>([])

  const { randomCar, resetRandomSelection } = useRandomCar()

  const handleCar = () => {
    resetRandomSelection()
  }
  useEffect(() => {
    if (randomCar) {
      localStorage.setItem("randomCar", JSON.stringify(randomCar))
      console.log("Samochód zapisany w localStorage:", randomCar)
    }
  }, [randomCar])

  /*
useEffect(() => {
    if (localStorage.getItem("randomCar")) {
      return
    }
    if (randomCar) {
      localStorage.setItem("randomCar", JSON.stringify(randomCar))
    }
  }, [randomCar])
*/

  return (
    <div className="bg-[url('src/assets/images/Background/bg.webp')] bg-fixed bg-cover min-h-dvh gap-y-5 flex flex-col items-center text-slate-50">
      <MainLogo className="size-1/3 my-3 " />
      <ColorsLegend />
      <SearchBar setCarInfo={setCarInfo} />
      <CarAttributes carInfo={carInfo} />
      <button onClick={handleCar}>asdoufhasdif</button>
    </div>
  )
}

export default App
