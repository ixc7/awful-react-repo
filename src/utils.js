const formatDate = str => {
  const zeros = n => {
    const str = n.toString()
    if (str.length === 1) return `0${str}`
    return str
  }
  const date = new Date(str)
  return `${zeros(date.getMonth() + 1)}/${zeros(date.getDate())}/${zeros(
    date.getFullYear()
  )}`
}

const truncate = (str, limit = 100, suffix = '') => str.slice(0, limit) + suffix

export { truncate, formatDate }
