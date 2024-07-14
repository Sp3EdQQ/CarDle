export const SearchBar = () => {
  const buttonClasses = "rounded-md bg-rose-600 text-white py-1 px-2"
  const inputTextClasses = "rounded-md text-black py-2 px-2"

  return (
    <div className="flex gap-x-3">
      <input type="text" placeholder="Brand" className={inputTextClasses} />
      <input type="text" placeholder="Model" className={inputTextClasses} />
      <button className={buttonClasses}>Check</button>
    </div>
  )
}
