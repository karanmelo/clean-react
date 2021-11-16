import { HttpPostClientSpy } from 'test/mocks/domain/data/useCases/authentication/protocols/http/http-post-client.mock'
import { RemoteAuthentication } from 'test/mocks/domain/data/useCases/authentication/remote-authentication.mock'

describe('RemoteAuthentication', () => {
  test('should be call HttpPostClient with correct URL', async () => {
    const url = 'url'
    const httpPostClientSpy = new HttpPostClientSpy()

    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
