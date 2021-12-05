import axios from 'axios'
import faker from 'faker'

import { HttpPostParams } from 'src/data/useCases/authentication/protocols/http/http-post-client'
import { AxiosHttpClient } from 'src/infrastructure/http/axios-http-client/axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({ url: faker.internet.url(), body: faker.random.objectElement() })

describe('AxiosHttpClient', () => {
  test('should call axios with correct UTL and verb', async () => {
    const request = mockPostRequest()
    const sut = makeSut()

    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url)
  })
})
