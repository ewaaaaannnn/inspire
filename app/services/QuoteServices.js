import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"


class QuoteService {

  async fetchQuote() {
    const response = await api.get('api/quotes')
    const activeQuote = new Quote(response.data)
    AppState.quotes = activeQuote
  }

}

export const quoteService = new QuoteService()