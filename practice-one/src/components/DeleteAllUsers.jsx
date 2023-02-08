import React, { useState } from 'react'

const DeleteAllUsers = () => {
  const [delAllUsers, setDelAllUsers] = useState(false);

  const wantsToDeleteAllUser = () =>{
    let deleteUser = window.confirm("Do you wants to Delete the All Users?")
    if(deleteUser === true){
      setDelAllUsers(true)
    }
  };

  return (
    <div>{delAllUsers === false ? 
        <button onClick={wantsToDeleteAllUser} className='btn float-end btn-danger'>
            <i className="fa-solid fa-trash-can"></i>&nbsp; Delete All Users
        </button>
        : null}
    </div>
  )
}

export default DeleteAllUsers