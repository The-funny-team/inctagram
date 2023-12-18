export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  const valueAsString = localStorage.getItem(key)

  return valueAsString !== null ? (JSON.parse(valueAsString) as T) : defaultValue
}
