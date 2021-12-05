import { HttpPostClient, HttpPostParams } from 'src/data/useCases/authentication/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from 'src/data/useCases/authentication/protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: unknown
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
