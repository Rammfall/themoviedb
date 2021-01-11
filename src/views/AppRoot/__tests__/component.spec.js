import React from 'react'
import { shallow } from 'enzyme'

import AppRootComponent from '../component'

describe('AppRootComponent', () => {
  const defaultProps = {
    isLoggedIn: false
  }

  describe('with default props', () => {
    it('matches snapshot', () => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const component = shallow(<AppRootComponent {...defaultProps} />)

      expect(component).toMatchSnapshot()
    })
  })

  describe('when isLoggedIn true', () => {
    it('matches snapshot', () => {
      const component = shallow(<AppRootComponent isLoggedIn />)

      expect(component).toMatchSnapshot()
    })
  })
})
