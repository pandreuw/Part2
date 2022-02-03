import React from 'react'

export const FilterInput = ({ filter, callOnChange }) => {
  return (
    <div>
      Filter show with <input
        value={filter.filter}
        onChange={callOnChange}
      />
    </div>
  )
}

export default FilterInput


