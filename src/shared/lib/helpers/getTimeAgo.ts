// function getTimeAgo(date) {
//   const currentDate = new Date()
//   const targetDate = new Date(date)
//
//   const timeDiff = Math.floor((currentDate - targetDate) / 1000) // разница в секундах
//
//   if (timeDiff < 60) {
//     return `${timeDiff} секунд назад`
//   } else if (timeDiff < 3600) {
//     const minutes = Math.floor(timeDiff / 60)
//
//     return `${minutes} минут назад`
//   } else if (timeDiff < 86400) {
//     const hours = Math.floor(timeDiff / 3600)
//
//     return `${hours} часов назад`
//   } else if (timeDiff < 2592000) {
//     const days = Math.floor(timeDiff / 86400)
//
//     return `${days} дней назад`
//   } else if (timeDiff < 31536000) {
//     const months = Math.floor(timeDiff / 2592000)
//
//     return `${months} месяцев назад`
//   } else {
//     const years = Math.floor(timeDiff / 31536000)
//
//     return `${years} год${years > 1 ? 'a' : ''} назад`
//   }
// }
