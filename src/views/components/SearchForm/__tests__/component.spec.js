import React from 'react'
import { shallow } from 'enzyme'

import SearchFormComponent from '../component'

describe('SearchFormComponent', () => {
  it('matches snapshot', () => {
    const props = {
      handleSubmit: jest.fn,
      handleReset: jest.fn
    }
    const component = shallow(<SearchFormComponent {...props} />)

    expect(component).toMatchSnapshot()
  })
})
