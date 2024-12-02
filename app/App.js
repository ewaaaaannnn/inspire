import { AuthController } from './controllers/AuthController.js';
import { ImageController } from './controllers/ImageController.js';
import { QuoteController } from './controllers/QuoteController.js';
import { ToDoController } from './controllers/ToDoController.js';
import { WeatherController } from './controllers/WeatherController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()

  ToDoController = new ToDoController()

  ImageController = new ImageController()

  WeatherController = new WeatherController()

  QuoteController = new QuoteController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
