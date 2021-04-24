import React from 'react'
import { shallow } from 'enzyme'

import ListContentComponent from '../component'

describe('ListContentComponent', () => {
  it('matches snapshot', () => {
    const props = {
      isEmpty: false,
      title: 'test',
      isEmptyTitle: 'test'
    }
    const component = shallow(
      <ListContentComponent
        {...props}
      />
    )

    expect(component).toMatchSnapshot()
  })
})
