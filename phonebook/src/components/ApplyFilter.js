import React from 'react'

export const ApplyFilter = (filter, contacts) => {
  // console.log('filter enabled', filter.enabled);
  // console.log('filter filter', filter.filter);
  // console.log('object value', contacts);
  console.log('ApplyFilter');

  // from https://stackoverflow.com/questions/2722159/how-to-filter-object-array-based-on-attributes
  var noteObject = filter.enabled
    ? contacts.filter(filtering => filtering.name.includes(filter.filter))
    : contacts

  // console.log('filtered object', noteObject);
  return noteObject
}

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


