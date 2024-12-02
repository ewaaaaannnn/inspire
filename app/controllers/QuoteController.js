import { AppState } from "../AppState.js"
import { quoteService } from "../services/QuoteServices.js"
import { setHTML } from "../utils/Writer.js"



export class QuoteController {
  constructor() {
    this.fetchQuote()
    AppState.on('quotes', this.drawQuote)

  }

  async fetchQuote() {
    try {
      await quoteService.fetchQuote()
    } catch (error) {
      console.error(error)
    }
  }


  drawQuote() {
    let quoteHTML = ''
    const activeQuote = quoteHTML += AppState.quotes.quoteTemplate
    setHTML('active-quote', activeQuote)
  }
}