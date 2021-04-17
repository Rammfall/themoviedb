import React from 'react'
import { shallow } from 'enzyme'

import ListContent from '../component'

describe('ListContent', () => {
  const Component = () => <div>Test</div>
  const props = {
    isEmpty: false,
    title: 'test',
    titleEmptyState: 'test',
    list: <Component />
  }

  it('matches snapshot', () => {
    const component = shallow(
      <ListContent {...props} />
    )

    expect(component).toMatchSnapshot()
  })
})
