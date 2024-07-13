import { SearchBar } from "./components/SearchBar"

const App = () => {
  const wrapperClasses =
    "bg-slate-800 gap-y-3 h-screen flex flex-col items-center justify-center text-slate-50"

  return (
    <div className={wrapperClasses}>
      <SearchBar />
    </div>
  )
}

export default App
