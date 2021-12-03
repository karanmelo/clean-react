import { AccountModel } from 'src/domain/models'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authenticatino {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
