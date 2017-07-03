import { Game } from '../World/Game'

export interface Renderer {
  render (state: Game.State): void
}
