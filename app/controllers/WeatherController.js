import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherServices.js"
import { setHTML } from "../utils/Writer.js"




export class WeatherController {
  constructor() {
    this.fetchWeather()
    AppState.on('weather', this.drawWeather)
    setInterval(this.fetchWeather, 60000)
    AppState.on('weather', this.drawTime)

  }


  async fetchWeather() {
    try {
      await weatherService.fetchWeather()
    } catch (error) {
      console.error(error)
    }
  }


  drawWeather() {
    let weatherHTML = ''
    const activeWeather = weatherHTML += AppState.weather.farenheitTemplate
    setHTML('weather-status', activeWeather)
  }

  changeWeatherCelsius() {
    let weatherHTML = ''
    const activeWeather = weatherHTML += AppState.weather.celsiusTemplate
    setHTML('weather-status', activeWeather)
  }

  changeWeatherFarenheit() {
    let weatherHTML = ''
    const activeWeather = weatherHTML += AppState.weather.farenheitTemplate
    setHTML('weather-status', activeWeather)
  }

  drawTime() {
    setHTML('current-time', AppState.weather.timeTemplate.toString())
  }

}
