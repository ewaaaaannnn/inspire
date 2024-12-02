import { Image } from './models/Image.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {




  /**@type {Weather} */
  weather = null

  /**@type {Image} */
  images = null

  /** @type {Quote} */
  quotes = null

  /**@type {ToDo[]} */
  toDoList = []

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
}

export const AppState = createObservableProxy(new ObservableAppState())