import faker from 'faker'

import { HttpPostParams } from 'src/data/useCases/authentication/protocols/http/http-post-client'

export const mockPostRequest = (): HttpPostParams<any> => ({ url: faker.internet.url(), body: faker.random.objectElement() })
