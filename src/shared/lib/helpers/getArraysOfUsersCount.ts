export const getArrayOfUsersCount = (count: number, numberLength: number) =>
  count.toString().padStart(numberLength, '0').split('')
