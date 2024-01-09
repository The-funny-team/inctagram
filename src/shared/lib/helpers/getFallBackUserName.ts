export const getFallBackUserName = (userName: string) => {
  return userName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
}
