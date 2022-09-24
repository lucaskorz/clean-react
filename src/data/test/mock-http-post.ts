import { HttpPostParams } from '../protocols/http'
import { faker } from '@faker-js/faker'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {
    id: 1,
    name: faker.internet.userName()
  }
})
