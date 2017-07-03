import { Game } from '../World/Game'
import { Command } from './Command'

class _PlaceFoodCommand implements Command {
  execute ({ board, ...state }: Game.State): Game.State {
    if (board.hasMaximumFoodCount) {
      return { board, ...state }
    }

    return {
      ...state,
      board: board.placeRandomFood()
    }
  }
}

export type PlaceFoodCommand = _PlaceFoodCommand
export const PlaceFoodCommand = new _PlaceFoodCommand()
