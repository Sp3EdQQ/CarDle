type Color = {
  id: number
  make_model_trim_id: number
  name: string
  rgb: string
}

type Mileage = {
  id: number
  make_model_trim_id: number
  fuel_tank_capacity: string
  combined_mpg: number
  epa_city_mpg: number
  epa_highway_mpg: number
  range_city: number
  range_highway: number
  battery_capacity_electric: null
  epa_time_to_charge_hr_240v_electric: null
  epa_kwh_100_mi_electric: null
  range_electric: null
  epa_highway_mpg_electric: null
  epa_city_mpg_electric: null
  epa_combined_mpg_electric: null
}

type Engine = {
  id: number
  make_model_trim_id: number
  engine_type: string
  fuel_type: string
  cylinders: string
  size: string
  horsepower_hp: number
  horsepower_rpm: number
  torque_ft_lbs: number
  torque_rpm: number
  valves: number
  valve_timing: string
  cam_type: string
  drive_type: string
  transmission: string
}

type Body = {
  id: number
  make_model_trim_id: number
  type: string
  doors: number
  length: string
  width: string
  seats: number
  height: string
  wheel_base: string
  front_track: null | number
  rear_track: null | number
  ground_clearance: string
  cargo_capacity: string
  max_cargo_capacity: null | number
  curb_weight: number
  gross_weight: null | number
  max_payload: null | number
  max_towing_capacity: null | number
}

type Make = {
  id: number
  name: string
}

type Model = {
  id: number
  make_id: number
  name: string
  make: Make
}

export type GetCarInfo = {
  id: number
  make_model_id: number
  year: number
  name: string
  description: string
  msrp: number
  invoice: number
  created: string
  modified: string
  make_model_trim_interior_colors: Color[]
  make_model_trim_exterior_colors: Color[]
  make_model_trim_mileage: Mileage
  make_model_trim_engine: Engine
  make_model_trim_body: Body
  make_model: Model
}

export type GetCarInfoImportant = {
  make: string
  model: string
  year: number
  horsepower: number
  torque: number
  cylinders: string
  drive: string
}
