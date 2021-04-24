import React from 'react'
import { shallow } from 'enzyme'

import ListDetails from '../component'

describe('ListDetails', () => {
  describe('when isBlank true', () => {
    it('matches snapshot', () => {
      const component = shallow(<ListDetails isBlank />)

      expect(component).toMatchSnapshot()
    })
  })

  describe('when isBlank false', () => {
    it('matches snapshot', () => {
      const component = shallow(<ListDetails isBlank={false} />)

      expect(component).toMatchSnapshot()
    })
  })
})
