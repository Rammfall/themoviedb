import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import SearchForm, { SearchFormContainer } from '../container'

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))
jest.mock('Utils/router/pushParam', () => jest.fn)

describe('SearchForm', () => {
  const store = configureStore()()

  it('matches snapshot', () => {
    const props = {
      store,
      location: {
        search: '?search='
      }
    }
    const wrapper = shallow(<SearchForm {...props} />)
    const container = diveTo(wrapper, SearchFormContainer)

    expect(container).toMatchSnapshot()
  })
})
