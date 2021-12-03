import faker from 'faker'

import { AuthenticationParams } from 'src/domain/useCases/authemtication'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
