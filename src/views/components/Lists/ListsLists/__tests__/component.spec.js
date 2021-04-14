import React from 'react'
import { shallow } from 'enzyme'

import ListsListsComponent from '../component'

describe('ListsListsComponent', () => {
  it('matches snapshot', () => {
    const props = {
      lists: [
        {
          id: 1,
          name: 'test',
          description: 'test'
        }
      ],
      onDelete: jest.fn((id) => id)
    }
    const component = shallow(<ListsListsComponent {...props} />)

    expect(component).toMatchSnapshot()
  })
})
