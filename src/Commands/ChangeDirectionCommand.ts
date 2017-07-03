import { Game } from '../World/Game'
import { Direction } from '../World/Direction'
import { Command } from './Command'

export class ChangeDirectionCommand implements Command {
  constructor (
    private readonly _direction: Direction
  ) {}

  execute ({ player, ...state }: Game.State): Game.State {
    return {
      ...state,
      player: player.changeDirection(this._direction)
    }
  }
}
