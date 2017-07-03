import { Command } from '../Commands/Command'

export interface Controller {
  start (dispatch: (command: Command) => void): void
  stop (): void
}
