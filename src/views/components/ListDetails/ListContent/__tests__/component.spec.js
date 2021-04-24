import React from 'react'
import { shallow } from 'enzyme'

import ListContentComponent from '../component'

describe('ListContentComponent', () => {
  it('matches snapshot', () => {
    const props = {
      isEmpty: false,
      title: 'test',
      isEmptyTitle: 'test',
      onListDelete: jest.fn()
    }
    const component = shallow(
      <ListContentComponent
        {...props}
      />
    )

    expect(component).toMatchSnapshot()
  })
})
