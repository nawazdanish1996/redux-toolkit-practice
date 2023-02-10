import React from 'react';
import "../css/CounterApp.scss";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "../store/counterSlice";

const CounterApp = () => {
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  const incrementHandler  = () =>{
    if(count < 5){
      dispatch(increment());
    }
  }

  const decrementHandler  = () =>{
    if(count > 1){
      dispatch(decrement());
    }
  }

  return (
    <div className='count'>
        <div className="container">
            <div className="row">

                <div className="col-md-12 mt-5">
                    <button onClick={incrementHandler} className="btn btn-primary fs-1">+</button>
                    <h1>{count}</h1>
                    <button onClick={decrementHandler} className="btn btn-primary fs-1">-</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CounterApp;