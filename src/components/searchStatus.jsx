import React from 'react'
import { declOfNum } from '../utils/declination'
import PropTypes from 'prop-types'

const SearchStatus = ({ length }) => {
  const phrase = declOfNum(length, [
    'человек придет',
    'человека придут',
    'человек придет'
  ])

  return (
    <h2>
      {length === 0 ? (
        <span className="badge bg-danger">Никто не придет на встречу</span>
      ) : (
        <span className="badge bg-primary">
          {length} {phrase} на встречу
        </span>
      )}
    </h2>
  )
}

SearchStatus.propTypes = {
  length: PropTypes.number
}

export default SearchStatus
