import { SearchBar } from "./components/SearchBar"
import { CarAttributes } from "./components/CarAttributes.tsx"

const App = () => {
  const wrapperClasses =
    "bg-slate-800 gap-y-3 h-full min-h-dvh flex flex-col items-center justify-center text-slate-50"

  return (
    <div className={wrapperClasses}>
      <SearchBar />
      <CarAttributes />
    </div>
  )
}

export default App
