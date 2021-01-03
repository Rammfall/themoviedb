import rootReducer from 'Store/rootReducer'

describe('check root reducer', () => {
  it('matches snapshot', () => {
    expect(rootReducer).toMatchSnapshot()
  })
})
