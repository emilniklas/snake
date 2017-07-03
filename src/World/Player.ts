import { List } from 'immutable'
import { TailPiece } from './TailPiece'
import { Direction } from './Direction'

export class Player {
  private constructor (
    public readonly pieces: List<TailPiece>,
    public readonly direction: Direction,
  ) {}

  static readonly INITIAL = new Player(
    List.of(
      TailPiece.at([5, 8]),
      TailPiece.at([5, 7]),
      TailPiece.at([5, 6]),
      TailPiece.at([5, 5]),
    ),
    Direction.RIGHT,
  )

  nextPosition () {
    return this.nextPiece().position
  }

  nextPiece () {
    return this.pieces.first().move(this.direction)
  }

  move () {
    const pieces = this.pieces
      .pop().unshift(this.nextPiece())

    return new Player(pieces, this.direction)
  }

  moveAndGrow () {
    return new Player(
      this.pieces.unshift(this.nextPiece()),
      this.direction
    )
  }

  changeDirection (direction: Direction) {
    const invertedDirection =
      (this.direction === Direction.UP && direction === Direction.DOWN) ||
      (this.direction === Direction.DOWN && direction === Direction.UP) ||
      (this.direction === Direction.RIGHT && direction === Direction.LEFT) ||
      (this.direction === Direction.LEFT && direction === Direction.RIGHT)

    if (invertedDirection) {
      return this
    }

    return new Player(this.pieces, direction)
  }
}
