import React from 'react'
import PropTypes from 'prop-types'
import CustomPropTypes from './custom_prop_types'

const SortableTableHeader = ({
  onClick,
  selected,
  sortOrder,
  children,
  className = '',
}) => (
    <th
      onClick={onClick}
      className={selected ? className + ' sorting' : className}
    >
      {children}
      {selected ? (
        <i>{sortOrder === 'asc' ? String.fromCharCode(9650) : String.fromCharCode(9660)}</i> 
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