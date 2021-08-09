import React from 'react'

const Contact = ({ contact }) => {
  //console.log('contact component',contact);
  return (
    <ul>{contact.name} {contact.number}</ul>
  )
}

export default Contact