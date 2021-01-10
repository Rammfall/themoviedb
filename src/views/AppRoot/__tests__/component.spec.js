import React from 'react'
import { shallow } from 'enzyme'

import AppRootComponent from '../component'

describe('AppRootComponent', () => {
  const defaultProps = {
    isLogged: false
  }

  describe('with default props', () => {
    it('matches snapshot', () => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const component = shallow(<AppRootComponent {...defaultProps} />)

      expect(component).toMatchSnapshot()
    })
  })

  describe('when isLogged true', () => {
    it('matches snapshot', () => {
      const component = shallow(<AppRootComponent isLogged />)

      expect(component)
        .toMatchSnapshot()
    })
  })
})
