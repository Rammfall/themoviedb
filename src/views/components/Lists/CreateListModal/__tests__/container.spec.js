import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import CreateListModal, { CreateListModalContainer } from '../container'

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))

describe('CreateListModal', () => {
  const store = configureStore()()

  it('matches snapshot', () => {
    const props = {
      isVisible: false,
      toggleHandler: jest.fn,
      isSubmitting: false,
      handleSubmit: jest.fn
    }
    const wrapper = shallow(<CreateListModal store={store}
{...props} />)
    const container = diveTo(wrapper, CreateListModalContainer)

    expect(container).toMatchSnapshot()
  })
})
