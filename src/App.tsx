import { SearchBar } from "./components/SearchBar"
import { CarAttributes } from "./components/CarAttributes"
import { ColorsLegend } from "./components/ColorsLegend"
import MainLogo from "./assets/images/Logo/logo-no-background.svg?react"

const App = () => {
  return (
    <div className="bg-[url('src/assets/images/Background/bg.webp')] bg-fixed bg-cover min-h-dvh gap-y-5 flex flex-col items-center text-slate-50">
      <MainLogo className="size-1/3 my-3 " />
      <ColorsLegend />
      <SearchBar />
      <CarAttributes />
    </div>
  )
}

export default App
