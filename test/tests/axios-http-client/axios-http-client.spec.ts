import axios from 'axios'
import faker from 'faker'

import { AxiosHttpClient } from 'src/infrastructure/http/axios-http-client/axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct UTL and verb', async () => {
    const url = faker.internet.url()
    const sut = makeSut()

    await sut.post({ url })

    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })
})
