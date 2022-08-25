import { render } from '@redwoodjs/testing/web'

import KanbanBoard from './KanbanBoard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KanbanBoard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KanbanBoard />)
    }).not.toThrow()
  })
})
