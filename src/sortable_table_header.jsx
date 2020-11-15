import React from 'react'
import PropTypes from 'prop-types'
import CustomPropTypes from 'components/custom_prop_types'

const SortableTableHeader = ({
  onClick,
  selected,
  sortOrder,
  children,
}) => (
    <th
      onClick={onClick}
      className={selected ? 'sorting' : null}
    >
      {children}
      {selected ? (
        <i className={`glyphicon ${sortOrder === 'asc' ? 'glyphicon-triangle-top' : 'glyphicon-triangle-bottom'}`} />
      ) : null }
    </th>
  )

SortableTableHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  sortOrder: PropTypes.string.isRequired,
  children: CustomPropTypes.component.isRequired,
}

export default SortableTableHeader