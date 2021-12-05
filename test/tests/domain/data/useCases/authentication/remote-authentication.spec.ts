import faker from 'faker'
import { HttpPostClientSpy } from 'test/mocks/data/useCases/authentication/protocols/http/http-post-client.mock'
import { mockAuthentication } from 'test/mocks/domain/models/authentication.mock'

import { HttpStatusCode } from 'src/data/useCases/authentication/protocols/http/http-response'
import { RemoteAuthentication } from 'src/data/useCases/authentication/remote-authentication'
import { InvalidCredentialsError, InternalServerError, UnexpectedError, NotFoundError } from 'src/domain/errors/'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('should be call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)

    await sut.auth(mockAuthentication())

    expect(httpPostClientSpy.url).toBe(url)
  })

  test('should be call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const body = mockAuthentication()

    await sut.auth(body)

    expect(httpPostClientSpy.body).toEqual(body)
  })

  test('should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('should throw NotFoundError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new NotFoundError())
  })

  test('should throw InternalServerError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.internalServerError
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new InternalServerError())
  })
})
