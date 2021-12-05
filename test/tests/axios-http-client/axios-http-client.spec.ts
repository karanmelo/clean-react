import axios from 'axios'
import faker from 'faker'

import { AxiosHttpClient } from 'src/infrastructure/http/axios-http-client/axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  test('should call axios with correct UTL', async () => {
    const sut = new AxiosHttpClient()
    const url = faker.internet.url()

    await sut.post({ url })

    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
