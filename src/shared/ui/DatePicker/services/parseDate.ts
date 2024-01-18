import { DateObject } from 'react-multi-date-picker'

export const dateRangeParser = <T extends boolean>(
  rangeMode: T,
  d: DateObject | DateObject[]
): T extends true ? string[] : string => {
  if (rangeMode) {
    const [dateFrom, dateTo] = d as DateObject[]

    return [
      dateFrom.toDate().toISOString(),
      ...(dateTo != null ? [dateTo.toDate().toISOString()] : []),
    ] as T extends true ? string[] : string
  }

  return d.toString() as T extends true ? string[] : string
}
