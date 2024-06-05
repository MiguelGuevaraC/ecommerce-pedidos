export interface PersonResponse{
  data: Person[]
}

export interface Person{
  id: number,
  typeDocument: number,
  names: string,
  paternalsurName: string,
  mothersurName: string,
  businessName: string,
  phone: number,
  email: string
}
