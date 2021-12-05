import { HttpResponse } from 'src/data/useCases/authentication/protocols/http/http-response'

export type HttpPostParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<HttpResponse>
}
