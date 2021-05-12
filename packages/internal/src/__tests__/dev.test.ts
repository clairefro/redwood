import path from 'path'

import { generateCellTypes } from '../dev'

const FIXTURE_PATH = path.resolve(
  __dirname,
  '../../../../__fixtures__/example-todo-main'
)

beforeAll(() => {
  process.env.__REDWOOD__CONFIG_PATH = FIXTURE_PATH
})
afterAll(() => {
  delete process.env.__REDWOOD__CONFIG_PATH
})

it('generates the correct types mirror types for cells', () => {
  //

  generateCellTypes()
})
