import express, { Application } from 'express'
import cors from 'cors'

export class App {
  private application: Application
  private PORT: number = 3333
  private HOST: string = '0.0.0.0'

  constructor() {
    this.application = express()
    this.middlewares()
    this.routes()
  }

  private async middlewares() {
    await this.application.use(express.json())
    await this.application.use(cors())
  }

  private routes(): void {
    this.application.get('/categories', (request, response) => {
      return response.send({msg: "Hello world !!!"})
    })
  }

  public async listen() {
    await this.application.listen(this.PORT, this.HOST)
    console.log(`Server started on port ${this.PORT}`)
  }

}
