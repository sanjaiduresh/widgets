import React from 'react'
import quick from './Images/quick.jpeg'
import './BalanceQuickAction.css'
export default function BalanceQuickAction() {
  return (
    <div className='quick-action'>

    <div className='balance'>

       <img src={quick} alt='flash' className='image' /> 
       <span className='statement'>Balance Quick Action</span>
       
    </div>

      <div className='button1'>
         <button className='button1-color'>Top Up</button>
      </div>

      
      <div className='button2'>
         <button className='button2-color'>Withdraw</button>
      </div>
      

      
      
    </div>
  )
}
