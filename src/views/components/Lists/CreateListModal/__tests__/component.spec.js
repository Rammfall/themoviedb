import React from 'react'
import { shallow } from 'enzyme'

import CreateListModalComponent from '../component'

describe('CreateListModalComponent', () => {
  it('matches snapshot', () => {
    const props = {
      isVisible: false,
      toggleHandler: jest.fn,
      isSubmitting: false,
      handleSubmit: jest.fn
    }
    const component = shallow(<CreateListModalComponent {...props} />)

    expect(component).toMatchSnapshot()
  })
})
