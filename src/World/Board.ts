import { Tile } from './Tile'
import { Matrix } from '../Shape/Matrix'
import { Point } from '../Shape/Point'

const MAX_FOOD_COUNT = 3

export class Board {
  private constructor (
    public readonly matrix: Matrix<Tile>
  ) {}

  static readonly EMPTY = new Board(
    Matrix.fill([30, 20], Tile.EMPTY)
  )

  updateTile (point: Point, tile: Tile) {
    return new Board(
      this.matrix.updateCell(point, tile)
    )
  }

  getTile (point: Point) {
    return this.matrix.getCell(point)
  }

  placeRandomFood () {
    const x = Math.floor(Math.random() * this.matrix.width)
    const y = Math.floor(Math.random() * this.matrix.height)

    return new Board(
      this.matrix.updateCell([x, y], Tile.FOOD)
    )
  }

  get foodCount () {
    return this.matrix.rows
      .reduce(
        (acc, row) => acc + row.reduce(
          (acc, cell) => cell === Tile.FOOD ? acc + 1 : acc,
          0,
        ),
        0,
      )
  }

  get hasMaximumFoodCount () {
    return this.foodCount >= MAX_FOOD_COUNT
  }
}
