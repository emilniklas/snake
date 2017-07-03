import { Range, Iterable } from 'immutable'
import { Point } from './Point'

export class Matrix <T> {
  private constructor (
    public readonly rows: Iterable<number, Iterable<number, T>>
  ) {}

  static fill <T> ([w, h]: [number, number], value: T) {
    return new Matrix(
      Range(0, h).map(() =>
        Range(0, w).map(() => value)
      )
    )
  }

  get width () {
    return this.rows.first().size
  }

  get height () {
    return this.rows.size
  }

  map (transform: (value: T, point: Point) => T) {
    return new Matrix(
      this.rows.map((row, y) =>
        row.map((cell, x) => transform(cell, [x, y]))
      )
    )
  }

  forEachCell (action: (value: T, point: Point) => void) {
    this.rows.forEach((row, y) =>
      row.forEach((cell, x) => action(cell, [x, y]))
    )
  }

  updateCell ([x, y]: Point, value: T) {
    return this.map((cell, [cx, cy]) => {
      if (x !== cx || y !== cy) return cell

      return value
    })
  }

  getCell ([x, y]: Point) {
    for (let cy = 0; cy < this.rows.size; cy++) {
      const row = this.rows.get(cy)
      for (let cx = 0; cx < row.size; cx++) {
        if (cx === x && cy === y) {
          return row.get(cx)
        }
      }
    }
    throw new Error()
  }
}
