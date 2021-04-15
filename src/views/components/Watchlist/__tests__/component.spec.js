import React from 'react'
import { shallow } from 'enzyme'

import Watchlist from '../component'

describe('Watchlist', () => {
  const props = {
    isEmpty: false
  }

  it('matches snapshot', () => {
    const component = shallow(
      <Watchlist {...props} />
    )

    expect(component).toMatchSnapshot()
  })
})
