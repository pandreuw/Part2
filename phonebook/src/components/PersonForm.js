import React from 'react'



const PersonForm = ({ calladdContact, callPersonchange, callNumberchange }) => {
  //console.log('contact component',contact);
  return (
    <form onSubmit={calladdContact}>
      <div>
        name: <input
          onChange={callPersonchange}
        />
      </div>
      <div>
        number: <input
          onChange={callNumberchange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm