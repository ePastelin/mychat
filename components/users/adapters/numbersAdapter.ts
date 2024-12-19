import { AdaptedNumbers, Number } from '../types'

export const numbersAdapter = (numbers: Number[]): AdaptedNumbers => {
  let adaptedNumbers: AdaptedNumbers = []

  numbers.forEach((number) => {
    adaptedNumbers.push({
      label: number.number,
      value: number.idnumber,
    })
  })

  return adaptedNumbers
}
