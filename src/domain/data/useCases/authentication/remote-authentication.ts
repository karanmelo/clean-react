import { HttpPostClient } from 'src/domain/data/useCases/authentication/protocols/http/http-post-client'
import { AuthenticationParams } from 'src/domain/useCases/authemtication'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: params })
  }
}
