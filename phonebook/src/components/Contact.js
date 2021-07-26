import React from 'react'

const Contact = ({ contact }) => {
  return (
    <ul>{contact.name} {contact.number}</ul>
  )
}

export default Contact