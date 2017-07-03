import { fromJS } from 'immutable'
import { Matrix } from './Matrix'

describe('Matrix', () => {
  const matrix = Matrix.fill([3, 2], 0)

  test('generated matrix', () => {
    expect(matrix.rows.toJS()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ])
  })

  it('is a functor', () => {
    expect(matrix.map((cell, [x, y]) => {
      expect(cell).toBe(0)
      return x + y
    }).rows.toJS()).toEqual([
      [0+0, 1+0, 2+0],
      [0+1, 1+1, 2+1],
    ])
  })

  test('updating a cell', () => {
    expect(matrix.updateCell([2, 1], 2).rows.toJS()).toEqual([
      [0, 0, 0],
      [0, 0, 2],
    ])
  })
})
