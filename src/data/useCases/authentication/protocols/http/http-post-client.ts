import { HttpResponse } from 'src/data/useCases/authentication/protocols/http/http-response'

export type HttpPostParams<T = unknown> = {
  url: string
  body?: T
}

export interface HttpPostClient {
  post: (params: HttpPostParams<unknown>) => Promise<HttpResponse>
}
