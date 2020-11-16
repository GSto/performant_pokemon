import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import CustomPropTypes from 'components/custom_prop_types'

const ViewportOnly = ({ children, placeholder }) => {
  const [visible, setVisible] = useState(true)
  const onChange = (visibility) => {
    setVisible(visibility)
  }

  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      {visible ? children : placeholder}
    </VisibilitySensor>
  )
}

ViewportOnly.propTypes = {
  children: CustomPropTypes.component.isRequired,
  placeholder: CustomPropTypes.component.isRequired,
}

export default ViewportOnly