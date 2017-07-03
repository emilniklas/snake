import { Game } from '../World/Game'

export interface Command {
  execute (state: Game.State): Game.State
}
