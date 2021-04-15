import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import DashboardPage, { DashboardPageContainer } from '../container'

jest.mock('Store/concepts/movies/selectors', () => ({
  isEmptyDashboardSelector: jest.fn(() => false)
}))

jest.mock('Store/concepts/data/selectors', () => ({
  loadingSelector: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))

describe('DashboardPage', () => {
  const mockStore = configureStore()()

  describe('when page param excluded in url', () => {
    const routerProps = {
      location: {
        search: ''
      }
    }
    const wrapper = shallow(
      <DashboardPage
        store={mockStore}
        {...routerProps}
      />
    )

    describe('with default props', () => {
      it('matches snapshot', () => {
        const container = diveTo(wrapper, DashboardPageContainer)

        expect(container).toMatchSnapshot()
      })
    })

    describe('after componentDidUpdate', () => {
      describe('when search changed', () => {
        it('matches snapshot', () => {
          const container = diveTo(wrapper, DashboardPageContainer)
          container.setProps({ location: { search: '?tes' } })

          expect(container).toMatchSnapshot()
        })
      })

      describe('when search not changed', () => {
        it('matches snapshot', () => {
          const container = diveTo(wrapper, DashboardPageContainer)
          container.setProps({ location: { search: '' } })

          expect(container).toMatchSnapshot()
        })
      })
    })
  })

  describe('with page param', () => {
    const routerProps = {
      location: {
        search: '?page=2'
      }
    }

    it('matches snapshot', () => {
      const wrapper = shallow(
        <DashboardPage
          store={mockStore}
          {...routerProps}
        />
      )
      const container = diveTo(wrapper, DashboardPageContainer)

      expect(container).toMatchSnapshot()
    })
  })

  describe('with search page param', () => {
    const routerProps = {
      location: {
        search: '?page=2&search=test'
      }
    }

    it('matches snapshot', () => {
      const wrapper = shallow(
        <DashboardPage
          store={mockStore}
          {...routerProps}
        />
      )
      const container = diveTo(wrapper, DashboardPageContainer)

      expect(container).toMatchSnapshot()
    })
  })
})
