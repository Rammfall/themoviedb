import React from 'react'
import { shallow } from 'enzyme'

import RouteComponent from '../component'

describe('RouteComponent', () => {
  const defaultProp = {
    exact: true,
    path: '/',
    // eslint-disable-next-line react/display-name
    component: () => <div>Test</div>,
    redirectTo: '/',
    isAccessAllowed: false
  }

  describe('with default props', () => {
    it('matches snapshot', () => {
      const component = shallow(<RouteComponent {...defaultProp} />)

      expect(component).toMatchSnapshot()
    })
  })

  describe('with conditionRender', () => {
    it('matches snapshot', () => {
      const props = {
        ...defaultProp,
        isAccessAllowed: true
      }
      const component = shallow(<RouteComponent {...props} />)

      expect(component).toMatchSnapshot()
    })
  })
})
