import { Command } from './Command'
import { Game } from '../World/Game'
import { Tile } from '../World/Tile'

class _MoveCommand implements Command {
  execute ({ player, board, ...state }: Game.State) {
    const inFrontOfPlayer = player.nextPosition()
    const tileInFrontOfPlayer = board.getTile(inFrontOfPlayer)

    if (tileInFrontOfPlayer === Tile.FOOD) {
      return {
        ...state,
        board: board.updateTile(inFrontOfPlayer, Tile.EMPTY),
        player: player.moveAndGrow()
      }
    }

    return {
      ...state,
      board,
      player: player.move()
    }
  }
}

export type MoveCommand = _MoveCommand
export const MoveCommand = new _MoveCommand()
