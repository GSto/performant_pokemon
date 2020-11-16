import PropTypes from 'prop-types'

export const component = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
])

const defaults = {
  component,
}

export default defaults