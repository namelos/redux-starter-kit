jest.unmock('../../components/Counter')

import { isEven } from '../../components/Counter'

describe('isEven', () => {
  it('returns true when even', () => {
    expect(isEven(2)).toBe(true)
  })
  it('returns false when odd', () => {
    expect(isEven(1)).toBe(false)
  })
})