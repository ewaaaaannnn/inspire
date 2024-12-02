export class Weather {
  constructor(data) {
    this.celsius = Math.floor(data.main.temp - 273.15)
    this.farenheit = Math.floor((data.main.temp - 273.15) * 9 / 5 + 32)
    this.date = data.date == undefined ? new Date() : new Date(data.date)
  }

  get farenheitTemplate() {
    return `
    <span class="bg-dark rounded p-2 mt-2"><span onclick="app.WeatherController.changeWeatherCelsius()" class="selectable">${this.farenheit}°F</span></span>
  `}

  get celsiusTemplate() {
    return `
      <span class="bg-dark rounded p-2 mt-2"><span onclick="app.WeatherController.changeWeatherFarenheit()" class="selectable">${this.celsius}°C</span></span>
      `
  }

  get timeTemplate() {
    return `
      <p class=" mt-1 p-2 rounded rounded-pill">${this.currentTime}</p>
      `
  }

  get currentTime() {
    return this.date.toLocaleString('en-us', { hour: 'numeric', minute: 'numeric' })
  }

}