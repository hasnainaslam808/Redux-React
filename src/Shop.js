import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import{actionCreators} from './state/index';
const Shop = () => {


  const dispatch = useDispatch();
  const action = bindActionCreators(actionCreators, dispatch)
  return (
   <>
   {/* without bind action creator */}
   {/* <button onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button> */}
   <button onClick={()=>{action.withdrawMoney(100)}}>-</button>
   price
   <button onClick={()=>{action.depositMoney(100)}}>+</button>
   </>
  )
}

export default Shop