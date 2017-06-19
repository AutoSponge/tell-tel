const DIGIT = /\d/g
const CHUNKS = /\d+/g
const NOT_DIGITS = /\D/g
const EXTRA = /[^.\d]/g
const DOTS = /\./g
const DASH = '-'
const PAUSED_CHUNKS = '$&.'
const SLOW_DIGIT = ' $&'
const ARIA_LABEL = 'aria-label'
const EMPTY = ''

export default ({ phoneNumber = EMPTY, ...props } = {}) => {
  const raw = phoneNumber.replace(NOT_DIGITS, EMPTY)
  const clean = phoneNumber.replace(DOTS, DASH)
  return {
    phoneNumber,
    href: `tel:${raw}`,
    [ARIA_LABEL]: clean
      .replace(CHUNKS, PAUSED_CHUNKS)
      .replace(EXTRA, EMPTY)
      .replace(DIGIT, SLOW_DIGIT)
      .substr(1),
    ...props
  }
}
