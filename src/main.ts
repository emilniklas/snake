import { CanvasRenderer } from './Render/CanvasRenderer'
import { Game } from './World/Game'
import { KeyboardController } from './Control/KeyboardController'

const canvas: HTMLCanvasElement = document.querySelector('#snake') as any

const renderer = new CanvasRenderer(window, canvas)
const controller = new KeyboardController()

Game.start(renderer, controller)
