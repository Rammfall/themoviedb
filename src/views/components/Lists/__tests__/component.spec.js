import React from 'react'
import { shallow } from 'enzyme'

import Lists from '../component'

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({
    formatMessage: jest.fn(() => 'test')
  }))
}))

describe('Lists', () => {
  it('matches snapshot', () => {
    const props = {
      isEmpty: false,
      isLoading: false,
      lists: [{
        name: 'test',
        description: 'test',
        id: 3
      }],
      createModalVisibility: false,
      toggleCreateModal: jest.fn
    }
    const component = shallow(<Lists {...props} />)

    expect(component).toMatchSnapshot()
  })
})
