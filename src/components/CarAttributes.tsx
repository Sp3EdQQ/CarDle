const labels = ["Marka", "Model", "Konie mechaniczne", "Rocznik", "Napęd"]
const attributesArray = [
  { brand: "Toyota", model: "Supra", hp: "300", year: "2019", drive: "RWD" },
  { brand: "Honda", model: "Civic", hp: "158", year: "2020", drive: "FWD" },
  { brand: "Ford", model: "Mustang", hp: "450", year: "2021", drive: "RWD" },
  { brand: "Chevrolet", model: "Camaro", hp: "275", year: "2019", drive: "RWD" },
  { brand: "BMW", model: "M3", hp: "473", year: "2021", drive: "RWD" },
  { brand: "Audi", model: "A4", hp: "248", year: "2020", drive: "AWD" },
  { brand: "Mercedes-Benz", model: "C-Class", hp: "255", year: "2021", drive: "RWD" },
  { brand: "Tesla", model: "Model 3", hp: "283", year: "2020", drive: "AWD" }
]

const attributesLabelsClasses =
  "border rounded-md grid grid-cols-5 gap-3 w-full max-w-screen-xl *:text-center font-semibold"
const attributesStyle =
  "grid grid-cols-5 gap-3 w-full max-w-screen-xl *:text-center *:mx-auto"
const labelStyle = "border rounded-lg aspect-square w-full max-w-24 content-center size"

export const CarAttributes = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className={attributesLabelsClasses}>
        {labels.map(label => {
          return <div key={label}>{label}</div>
        })}
      </div>
      <div className="flex flex-col w-full gap-y-4">
        {attributesArray.map(({ brand, model, hp, year, drive }, index) => {
          return (
            <div key={index} className={attributesStyle}>
              <div className={labelStyle}>{brand}</div>
              <div className={labelStyle}>{model}</div>
              <div className={labelStyle}>{hp}</div>
              <div className={labelStyle}>{year}</div>
              <div className={labelStyle}>{drive}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
