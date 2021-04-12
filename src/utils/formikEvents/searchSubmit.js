import pushParam from 'Utils/router/pushParam'

/**
 * @param {Object} fields - fields of form
 * @param {string} fields.search - field with name `search`
 * @param {Object} rest - rest properties from formik
 * @param {Object} rest.props - props of component
 * @param {Object} rest.props.history - history object form react router
 */
const searchSubmit = ({ search }, { props: { history } }) => {
  pushParam(history, ['search', encodeURIComponent(search)])
}

export default searchSubmit
