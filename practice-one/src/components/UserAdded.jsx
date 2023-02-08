import React, { useState } from 'react';

const UserAdded = () => {
  const [delUser, setDelUser] = useState(false);

  const wantsToDeleteUser = () =>{
    let deleteUser = window.confirm("Do you wants to Delete the User?")
    if(deleteUser === true){
      setDelUser(true)
    }
  };

  return (
    <div>
      {
        delUser === false ? 
        <div className='col-md-12'>
            <p className='float-start'>111</p>
            <button onClick={wantsToDeleteUser} className="btn btn-danger float-end">
              <i className="fa-solid fa-trash-can"></i>&nbsp; Delete User
            </button>
        </div>
        : null
      }
    </div>
  )
}

export default UserAdded