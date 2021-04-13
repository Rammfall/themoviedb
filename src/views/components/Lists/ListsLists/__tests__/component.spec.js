import React from 'react'
import { shallow } from 'enzyme'

import ListsLists from '../component'

describe('ListsLists', () => {
  it('matches snapshot', () => {
    const props = {
      lists: [
        {
          id: 1,
          name: 'test',
          description: 'test'
        }
      ]
    }
    const component = shallow(<ListsLists {...props} />)

    expect(component).toMatchSnapshot()
  })
})
