const MINUTE_RANGE = 60
const HOUR_RANGE = 3600
const DAY_RANGE = 86400
const MONTH_RANGE = 2592000
const YEAR_RANGE = 31536000

export const getTimeAgo = (date: Date, locale: 'en' | 'ru') => {
  const currentDate = new Date()
  const targetDate = new Date(date)

  const timeDiff = Math.floor((currentDate.getTime() - targetDate.getTime()) / 1000)

  if (timeDiff < MINUTE_RANGE) {
    return `${timeDiff} ${locale === 'ru' ? 'секунд назад' : 'seconds ago'}`
  } else if (timeDiff < HOUR_RANGE) {
    const minutes = Math.floor(timeDiff / MINUTE_RANGE)

    return `${minutes} ${locale === 'ru' ? 'минут назад' : 'minutes ago'}`
  } else if (timeDiff < DAY_RANGE) {
    const hours = Math.floor(timeDiff / HOUR_RANGE)

    return `${hours} ${locale === 'ru' ? 'часов назад' : 'hours ago'}`
  } else if (timeDiff < MONTH_RANGE) {
    const days = Math.floor(timeDiff / DAY_RANGE)

    return `${days} ${locale === 'ru' ? 'дней назад' : 'days ago'}`
  } else if (timeDiff < YEAR_RANGE) {
    const months = Math.floor(timeDiff / MONTH_RANGE)

    return `${months} месяцев назад`
  } else {
    const years = Math.floor(timeDiff / YEAR_RANGE)

    return `${years} год${years > 1 ? 'a' : ''} назад`
  }
}
