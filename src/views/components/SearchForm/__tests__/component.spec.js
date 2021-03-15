import React from 'react'
import { shallow } from 'enzyme'

import SearchForm from '../component'

describe('SearchForm', () => {
  it('matches snapshot', () => {
    const component = shallow(<SearchForm />)

    expect(component).toMatchSnapshot()
  })
})
