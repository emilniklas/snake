import { Renderer } from '../Render/Renderer'
import { Board } from './Board'
import { Player } from './Player'
import { Tile } from './Tile'
import { Command } from '../Commands/Command'
import { MoveCommand } from '../Commands/MoveCommand'
import { PlaceFoodCommand } from '../Commands/PlaceFoodCommand'
import { Controller } from '../Control/Controller'

export class Game {
  interval = 400

  private constructor (
    private readonly _renderer: Renderer,
    private readonly _controller: Controller,
    private _state: Game.State,
  ) {}

  get state () {
    return this._state
  }

  static start (renderer: Renderer, controller: Controller) {
    const game = new Game(renderer, controller, {
      board: Board.EMPTY
        .placeRandomFood()
        .placeRandomFood(),
      player: Player.INITIAL,
    })
    game.start()
    return game
  }

  dispatch = (command: Command) => {
    this._state = command.execute(this._state)
  }

  start () {
    this._controller.start(this.dispatch)
    this._isRunning = true
    this._tick()
    this._update()
  }

  stop () {
    this._isRunning = false
    this._controller.stop()
  }

  private _tick = () => {
    if (!this._isRunning) return

    this.dispatch(MoveCommand)

    this.interval *= 0.999
    this.interval = Math.max(this.interval, 40)

    if (Math.random () < 0.2) {
      this.dispatch(PlaceFoodCommand)
    }

    setTimeout(this._tick, this.interval)
  }

  private _isRunning = false
  private _update = () => {
    if (!this._isRunning) return

    this._renderer.render(this.state)

    requestAnimationFrame(this._update)
  }
}

export namespace Game {
  export type State = {
    board: Board
    player: Player
  }
}
