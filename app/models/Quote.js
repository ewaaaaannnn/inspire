export class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.quote
  }

  get quoteTemplate() {
    return `
      <div class="col-4 text-center p-2">${this.body}</div>
      <div id="author-body" class="col-3 text-center p-2 align-self-center">- ${this.author}</div>
      `
  }
}