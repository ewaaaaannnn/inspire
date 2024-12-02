import { AppState } from "../AppState.js"
import { Weather } from "../models/weather.js"
import { api } from "./AxiosService.js"



class WeatherService {


  async fetchWeather() {
    const response = await api.get('api/weather')
    console.log(response.data)
    const weather = new Weather(response.data)
    AppState.weather = weather
  }

}

export const weatherService = new WeatherService()