import pushParam from 'Utils/router/pushParam'

import searchSubmit from '../searchSubmit'

jest.mock('Utils/router/pushParam', () => jest.fn())

describe('searchSubmit', () => {
  it('calls pushParam with correct args', () => {
    const history = {}
    const search = 'test'
    searchSubmit({ search }, { props: { history } } )

    expect(pushParam).toBeCalledWith(history, ['search', 'test'])
  })
})
