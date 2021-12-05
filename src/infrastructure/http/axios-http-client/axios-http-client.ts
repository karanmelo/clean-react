import axios from 'axios'

import { HttpPostParams } from 'src/data/useCases/authentication/protocols/http/http-post-client'

export class AxiosHttpClient {
  async post (params: HttpPostParams<any>): Promise<void> {
    await axios.post(params.url)
  }
}
