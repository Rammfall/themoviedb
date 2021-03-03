import React from 'react'
import { shallow } from 'enzyme'

import GuestLayout from '../component'

describe('GuestLayout', () => {
  it('matches snapshot', () => {
    const Children = () => <>Test</>
    const component = shallow(
      <GuestLayout>
        <Children />
      </GuestLayout>
    )

    expect(component).toMatchSnapshot()
  })
})
