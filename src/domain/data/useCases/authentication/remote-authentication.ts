import { HttpPostClient } from 'src/domain/data/useCases/authentication/protocols/http/http-post-client'
import { InvalidCredentialsError, UnexpectedError, InternalServerError, NotFoundError } from 'src/domain/errors/'
import { AuthenticationParams } from 'src/domain/useCases/authemtication'

import { HttpStatusCode } from './protocols/http/http-response'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({ url: this.url, body: params })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      case HttpStatusCode.notFound: throw new NotFoundError()
      case HttpStatusCode.internalServerError: throw new InternalServerError()
      default: throw new UnexpectedError()
    }
  }
}
