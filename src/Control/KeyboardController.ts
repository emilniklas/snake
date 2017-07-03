import { Command } from '../Commands/Command'
import { ChangeDirectionCommand } from '../Commands/ChangeDirectionCommand'
import { Direction } from '../World/Direction'
import { Controller } from './Controller'

const Keys = {
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
}

export class KeyboardController implements Controller {
  private _dispatch: (command: Command) => void = () => {}

  start (dispatch: (command: Command) => void) {
    this._dispatch = dispatch

    window.addEventListener('keydown', this._onKeyDown)
  }

  stop () {
    window.removeEventListener('keydown', this._onKeyDown)
  }

  private _onKeyDown = ({ keyCode }: KeyboardEvent) => {
    switch (keyCode) {
      case Keys.LEFT:
        this._dispatch(new ChangeDirectionCommand(Direction.LEFT))
        break
      case Keys.UP:
        this._dispatch(new ChangeDirectionCommand(Direction.UP))
        break
      case Keys.DOWN:
        this._dispatch(new ChangeDirectionCommand(Direction.DOWN))
        break
      case Keys.RIGHT:
        this._dispatch(new ChangeDirectionCommand(Direction.RIGHT))
        break
    }
  }
}
