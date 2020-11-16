import PropTypes from 'prop-types'

export const component = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
])

export default {
  component,
}