import Enzyme from 'enzyme' // eslint-disable-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16' // eslint-disable-line import/no-extraneous-dependencies

Enzyme.configure({ adapter: new Adapter() })

process.env.API_URL = 'server.test/'
process.env.API_KEY = 'TEST_KEY'

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl')
  const en = jest.requireActual('./locales/en')
  const intl = reactIntl.createIntl({
    locale: 'en',
    messages: en.default.messages
  })

  return {
    ...reactIntl,
    useIntl: () => intl,
    intl: jest.fn()
  }
})
