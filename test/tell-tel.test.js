import test from 'tape'
import tellTel from '../'
const ARIA_LABEL = 'aria-label'

test('tell-tel module', t => {
  t.plan(1)
  t.equal(typeof tellTel, 'function', 'exposes a function')
})

test('tellTel function', t => {
  t.plan(6)
  t.equal(typeof tellTel(), 'object', 'returns an object')
  t.deepEqual(
    tellTel({ foo: 1 }),
    { foo: 1, phoneNumber: '', href: 'tel:', [ARIA_LABEL]: '' },
    'adds phoneNumber, href, aria-label'
  )
  t.deepEqual(tellTel({ phoneNumber: '44-123-456-7890' }), {
    [ARIA_LABEL]: '4 4. 1 2 3. 4 5 6. 7 8 9 0.',
    href: 'tel:441234567890',
    phoneNumber: '44-123-456-7890'
  })
  t.deepEqual(tellTel({ phoneNumber: '+1 (123) 456-7890' }), {
    [ARIA_LABEL]: '1. 1 2 3. 4 5 6. 7 8 9 0.',
    href: 'tel:11234567890',
    phoneNumber: '+1 (123) 456-7890'
  })
  t.deepEqual(tellTel({ phoneNumber: '(123) 456-7890' }), {
    [ARIA_LABEL]: '1 2 3. 4 5 6. 7 8 9 0.',
    href: 'tel:1234567890',
    phoneNumber: '(123) 456-7890'
  })
  t.deepEqual(tellTel({ phoneNumber: '123.4567' }), {
    [ARIA_LABEL]: '1 2 3. 4 5 6 7.',
    href: 'tel:1234567',
    phoneNumber: '123.4567'
  })
})
