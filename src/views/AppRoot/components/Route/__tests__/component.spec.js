import React from 'react'
import { shallow } from 'enzyme'

import RouteComponent from '../component'

describe('RouteComponent matches snapshot', () => {
  const defaultProp = {
    exact: true,
    path: '/',
    // eslint-disable-next-line react/display-name
    component: () => <div>Test</div>,
    redirectTo: '/',
    conditionRender: false
  }

  it('with default props', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const component = shallow(<RouteComponent {...defaultProp} />)

    expect(component).toMatchSnapshot()
  })

  it('with conditionRender', () => {
    const props = {
      ...defaultProp,
      conditionRender: true
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    const component = shallow(<RouteComponent {...props} />)

    expect(component).toMatchSnapshot()
  })
})
