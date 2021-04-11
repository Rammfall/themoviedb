import React from 'react'
import { shallow } from 'enzyme'

import RenderCtrl from '../component'

describe('RenderCtrl', () => {
  const Element = <div>Test</div>
  const defaultProps = {
    isLoading: false,
    isEmpty: false,
    renderLoading: <Element />,
    renderEmpty: <Element />,
    renderList: <Element />
  }

  describe('with default props', () => {
    it('matches snapshot', () => {
      const component = shallow(<RenderCtrl {...defaultProps} />)

      expect(component).toMatchSnapshot()
    })
  })

  describe('when isLoading true', () => {
    it('matches snapshot', () => {
      const props = {
        ...defaultProps,
        isLoading: true
      }
      const component = shallow(<RenderCtrl {...props} />)

      expect(component).toMatchSnapshot()
    })
  })

  describe('when isEmpty true', () => {
    it('matches snapshot', () => {
      const props = {
        ...defaultProps,
        isEmpty: true
      }
      const component = shallow(<RenderCtrl {...props} />)

      expect(component).toMatchSnapshot()
    })
  })
})
