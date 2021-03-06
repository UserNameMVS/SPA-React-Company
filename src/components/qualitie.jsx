import React from 'react'
import PropTypes from 'prop-types'

const Qualitie = ({ color, name }) => {
  const getBageClasses = (color) => `badge m-2 bg-${color}`

  return (
    <span className={getBageClasses(color)}>
      {name}
    </span>
  )
}

Qualitie.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Qualitie
