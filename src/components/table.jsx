import React from 'react'
// import PropTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

function Table({ ...rest }) {
  return (
    <table className="table">
      <TableHeader {...rest} />
      <TableBody {...rest} />
    </table>
  )
}

// Table.propTypes = {}

export default Table
