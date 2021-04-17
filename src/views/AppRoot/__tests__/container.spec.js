import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import AppRoot, { AppRootContainer } from '../container'

jest.mock('react-router-dom', () => ({
  withRouter: jest.fn(component => component)
}))

describe('AppRoot', () => {
  const store = configureStore()()
  const props = {
    location: {
      search: ''
    }
  }
  const wrapper = shallow(
    <AppRoot
      store={store}
      {...props}
    />
  )

  it('matches snapshot', () => {
    const container = diveTo(wrapper, AppRootContainer)

    expect(container).toMatchSnapshot()
  })

  it('runs updatePage', () => {
    const container = diveTo(wrapper, AppRootContainer)
    const spy = jest.spyOn(container.instance(), 'updatePage')
    container.instance().updatePage()

    expect(spy).toHaveBeenCalled()
  })

  it('componentDidUpdate', () => {
    const container = diveTo(wrapper, AppRootContainer)
    const spy = jest.spyOn(container.instance(), 'updatePage')
    container.setProps({ location: { search: 'te' } })
    container.setProps({ location: { search: 'te' } })

    expect(spy).toHaveBeenCalled()
  })
})
