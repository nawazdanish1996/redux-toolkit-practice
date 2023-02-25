import React from 'react';
import { useSelector } from 'react-redux';

const NewApp = () => {
    const count = useSelector((state)=> state.counter.value)


  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Count: {count} </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewApp