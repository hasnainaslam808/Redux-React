import React from 'react'
import {useSelector} from 'react-redux'
const Navbar = () => {
  const amount = useSelector(state => state.amount)
  // console.log(useSelector((state) => state))
    return (
      <>
         <div>Amount {amount}</div>
      </>
 
  )
}

export default Navbar