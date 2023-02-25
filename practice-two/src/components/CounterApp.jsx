import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from "../store/slice/counterSlice";

const CounterApp = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();

    const inc = () =>{
        if(count < 5){
            dispatch(increment())
        }
    };

    const dec = () =>{
        if(count > 1){
            dispatch(decrement())
        }
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div onClick={inc} className="btn btn-warning">+</div>
                    <h1>Count: {count} </h1>
                    <div onClick={dec} className="btn btn-warning">-</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CounterApp