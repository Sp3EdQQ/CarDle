export const ColorsLegend = () => {
  return (
    <div>
      <div className="text-center py-3 text-xl">Legend</div>
      <div className="text-shadow grid grid-cols-3 *:p-8 *:justify-center *:text-center ">
        <div className="bg-green-600 rounded-l-xl">Correct</div>
        <div className="bg-orange-500 ">Partially</div>
        <div className="bg-red-500 rounded-r-xl">Incorrect</div>
      </div>
    </div>
  )
}
