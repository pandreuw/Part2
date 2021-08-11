import React from 'react'

const PersonForm = ({ calladdContact, callPersonchange, defaultPerson, callNumberchange, defaultNumber }) => {
  //console.log('contact component',contact);
  return (
    <div>
      <form onSubmit={calladdContact}>
        <div>
          name: <input
            value={defaultPerson}
            onChange={callPersonchange}
          />
        </div>
        <div>
          number: <input
            value={defaultNumber}
            onChange={callNumberchange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm