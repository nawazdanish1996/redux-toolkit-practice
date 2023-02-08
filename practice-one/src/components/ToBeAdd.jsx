import React, { useState } from 'react';

const ToBeAdd = (props) => {
    const [userInput,  setUserInput] = useState("");

    const userSubmitHandler = (e) =>{
        e.preventDefault();
    }

  return (
    <div className="col-md-12 rounded bg-dark pt-3 pb-3 mb-5">
        <form onSubmit={userSubmitHandler}>
            <input name="addNewUser" onChange={(e)=> setUserInput(e.target.value)} value={userInput} className='float-start w-50' type="text" placeholder='Text here...' />
            <div className="btn-group">
                <button onClick={()=> props.data.setIsOpen(false)} className='btn btn-danger btn-sm'>
                    <i className="fa-solid fa-x"></i>&nbsp; Remove
                </button>

                <button className='btn float-end btn-primary btn-sm'>
                    <i className="fa-solid fa-user-plus"></i>&nbsp; Add User
                </button>
            </div>
        </form>
    </div>
  )
}

export default ToBeAdd