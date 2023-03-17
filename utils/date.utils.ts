const months: string[] = [
  'janv.',
  'févr.',
  'mars',
  'avr.',
  'mai',
  'juin',
  'juill.',
  'août',
  'sept.',
  'oct.',
  'nov.',
  'déc.',
]

const displayDate = (strDate: Date): string => {
  const date = new Date(strDate)
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

export { displayDate }
