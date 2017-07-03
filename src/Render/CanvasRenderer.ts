import { Renderer } from './Renderer'
import { Game } from '../World/Game'
import { Tile } from '../World/Tile'
import { Point } from '../Shape/Point'

export class CanvasRenderer implements Renderer {
  private readonly _context: CanvasRenderingContext2D

  constructor (
    private readonly _window: Window,
    private readonly _canvas: HTMLCanvasElement,
  ) {
    const context = _canvas.getContext('2d')
    context.scale(_canvas.width / 300, _canvas.height / 200)

    this._context = context
  }

  render (state: Game.State) {
    state.board.matrix.forEachCell((cell, point) => {
      this._fillCell(point, cell === Tile.FOOD ? 'red' : '#999')
    })

    state.player.pieces.forEach(({ position }) => {
      this._fillCell(position, 'green')
    })
  }

  private _fillCell ([x, y]: Point, style: string) {
    this._context.fillStyle = style
    this._context.fillRect(x * 10, y * 10, 10, 10)
  }
}
