import React from 'react'
import { shallow } from 'enzyme'

import PrivateLayout from '../component'

describe('PrivateLayout', () => {
  it('matches snapshot', () => {
    const Children = () => <>test</>
    const component = shallow(
      <PrivateLayout>
        <Children />
      </PrivateLayout>
    )

    expect(component).toMatchSnapshot()
  })
})
