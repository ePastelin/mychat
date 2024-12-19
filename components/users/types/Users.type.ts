export type Role = '1' | '2'
export type PhoneNumbers = string[]

export interface User {
  id: number
  username: string
  password: string
  role: Role
  phone_numbers: PhoneNumbers
}

export interface Number {
  idnumber: string
  number: string
}

export interface AdaptedNumber {
  value: string
  label: string
}

export type AdaptedNumbers = AdaptedNumber[]
