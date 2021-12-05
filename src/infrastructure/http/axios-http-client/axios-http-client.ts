import axios from 'axios'

import { HttpPostClient, HttpPostParams } from 'src/data/useCases/authentication/protocols/http/http-post-client'
import { HttpResponse } from 'src/data/useCases/authentication/protocols/http/http-response'

export class AxiosHttpClient implements HttpPostClient {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body)
    return { statusCode: httpResponse.status, body: httpResponse.data }
  }
}
