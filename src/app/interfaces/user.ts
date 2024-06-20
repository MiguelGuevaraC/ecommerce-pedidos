import { Person } from "./person"
import { TypeUser } from "./typeuser"

export interface User{
  id: number,
  username: string,
  password: string,
  names: string,
  motherSurname: string,
  fatherSurname: string,
  email: string,
  address: string,
  phone: string,
  typeuser_id: TypeUser,
  person_id: number,
  created_at: string
}
