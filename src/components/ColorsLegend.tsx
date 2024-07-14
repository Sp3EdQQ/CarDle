export const ColorsLegend = () => {
  return (
    <div>
      <div className="text-center py-5">Legend</div>
      <div className="grid grid-cols-3 *:p-8 *:justify-center *:text-center ">
        <div className="bg-green-500 rounded-l-xl">Correct</div>
        <div className="bg-yellow-500 ">Partially</div>
        <div className="bg-red-500 rounded-r-xl">Incorrect</div>
      </div>
    </div>
  )
}
