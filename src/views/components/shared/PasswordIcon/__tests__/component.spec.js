import { shallow } from 'enzyme'

import PasswordIcon from '../component'

describe('PasswordIcon', () => {
  describe('with default props', () => {
    it('matches snapshot', () => {
      const component = shallow(PasswordIcon(false))

      expect(component).toMatchSnapshot()
    })
  })

  describe('with visible', () => {
    it('matches snapshot', () => {
      const component = shallow(PasswordIcon(true))

      expect(component).toMatchSnapshot()
    })
  })
})
