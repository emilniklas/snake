import { Point } from '../Shape/Point'
import { Direction } from './Direction'

export class TailPiece {
  private constructor (
    public readonly position: Point
  ) {}

  static at (point: Point) {
    return new TailPiece(point)
  }

  move (direction: Direction) {
    const [x, y] = this.position
    switch (direction) {
      case Direction.UP:
        return new TailPiece([x, y - 1])
      case Direction.DOWN:
        return new TailPiece([x, y + 1])
      case Direction.LEFT:
        return new TailPiece([x - 1, y])
      case Direction.RIGHT:
        return new TailPiece([x + 1, y])
    }
  }
}
