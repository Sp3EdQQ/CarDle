import ArrowD from "../assets/images/Tiles/arrow.svg?react"

export const ColorsLegend = () => {
  return (
    <div>
      <div className="text-center py-3 text-xl">Legend</div>
      <div className="text-shadow grid grid-cols-4 *:text-lg *:flex *:items-center *:justify-center *:aspect-square *:h-24">
        <div className="bg-green-600 rounded-l-xl">Correct</div>
        <div className="bg-orange-500 relative">
          <ArrowD className="h-full text-orange-600" />
          <span className="absolute flex text-center">Higher</span>
        </div>
        <div className="bg-orange-500 relative">
          <ArrowD className="h-full rotate-180 text-orange-600" />
          <span className="absolute flex text-center">Lower</span>
        </div>
        <div className="bg-red-500 rounded-r-xl">Incorrect</div>
      </div>
    </div>
  )
}
