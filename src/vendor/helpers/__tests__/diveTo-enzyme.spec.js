import React from 'react'
import { connect } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import diveTo from '../diveTo-enzyme'

// eslint-disable-next-line react/prefer-stateless-function
class MockComponent extends React.Component {
  render() {
    return <div>MockComponent</div>
  }
}

// eslint-disable-next-line react/prefer-stateless-function, react/no-multi-comp
class OtherComponent extends React.Component {
  render() {
    return <div>OtherComponent</div>
  }
}

const WrappedComponent = connect()(MockComponent)

describe('diveTo helper', () => {
  const store = configureStore()({})
  store.dispatch = jest.fn()
  const component = shallow(<WrappedComponent store={store} />)

  describe('as standalone function', () => {
    const targetWrapper = diveTo(component, MockComponent)
    const targetInstance = targetWrapper.instance()

    it('dives to target component', () => {
      expect(targetInstance).toBeInstanceOf(MockComponent)
    })

    it('throws error if target component is not present', () => {
      expect(() => {
        diveTo(component, OtherComponent)
      }).toThrow(Error)
    })

    it('throws error if reached functional component', () => {
      expect(() => {
        diveTo(component, () => <div>FunctionalComponent</div>)
      }).toThrow(Error)
    })
  })
})
