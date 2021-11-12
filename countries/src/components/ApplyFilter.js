import React from 'react'

export const ApplyFilter = (filter, data) => {

  // from https://stackoverflow.com/questions/2722159/how-to-filter-object-array-based-on-attributes
  // from https://stackoverflow.com/questions/44469548/es6-filter-data-with-case-insensitive-term
  var noteObject = filter.enabled
    ? data.filter(filtering => new RegExp(filter.filter, 'i').test(filtering.name.common))
    : []
  //   noteObject= noteObject.length>10 ? ['Too many matches, specify another filter'] : noteObject
  // // console.log('filtered object', noteObject);
  return noteObject
}

export const FilterInput = ({ text, filter, callOnChange }) => {
  return (
    <div>
      {text} { } 
      <input
        value={filter.filter}
        onChange={callOnChange}
      />
    </div>
  )
}


