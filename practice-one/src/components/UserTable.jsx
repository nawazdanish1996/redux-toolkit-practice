import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser, deleteAllUsers} from "../store/slice/userSlice";
import  { fakeUserData } from  "../api/index"

const AddUsers = () => {
    const data = useSelector((state)=> {return state.users});
    const dispatch = useDispatch();

    const addNewUserHandler = (payload) =>{
        dispatch(addUser(payload));
    }

    const removeUserHandler = (id) =>{
        dispatch(removeUser(id))
    }

  return (
    <div className='user'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <h1 className='text-secondary text-uppercase'>User Table</h1>
                </div>

                <div className="col-md-12 mt-5 border-bottom mb-3">
                    <h2 className='float-start'>Add Users</h2>
                    <div className="btn-group float-end">
                        <button onClick={()=> addNewUserHandler(fakeUserData())} className='btn btn-primary btn-sm'>
                            <i className="fa-solid fa-user-plus"></i>&nbsp; Add New Users
                        </button>
                    </div>
                </div>
            

                {data.map((val, id)=>{
                    return(
                        <div className="col-md-12" key={id}>
                            <p className='float-start'>{val}</p>
                            <button onClick={()=> removeUserHandler(id)} className="btn btn-danger float-end">
                            <i className="fa-solid fa-trash-can"></i>
                            {/* &nbsp; Delete User */}
                            </button>
                        </div>
                    )
                })}

                <div className="col-md-12 mt-4">
                    <button onClick={()=> dispatch(deleteAllUsers())} className='btn float-end btn-danger'>
                        <i className="fa-solid fa-trash-can"></i>&nbsp; Delete All Users
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUsers