import React from 'react'
import { shallow } from 'enzyme'

import AppRootComponent from '../component'

describe('AppRootComponent matches snapshot', () => {
  const defaultProps = {
    isLogged: false
  }

  it('with default props', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const component = shallow(<AppRootComponent {...defaultProps} />)

    expect(component).toMatchSnapshot()
  })

  it('with default props', () => {
    const component = shallow(<AppRootComponent isLogged />)

    expect(component).toMatchSnapshot()
  })
})
