import React from 'react'
import './Exchange.css'
import currency from './Images/currency-exchange.jpg'
import bitcoin from './Images/Bitcoin.jpeg'
export default function Exchange() {
  return (
    <div>
        <div className='frame'>
         <h1 className='text'><img id="img" src={currency} width="30px" height="30px"/>EXCHANGE</h1>
         <div className='buttons'>
          <button className='buy-button'>Buy</button>
          <button className='sell-button'>Sell</button>
          </div>
          <h3 className='from'>From</h3>
    
         <select id="type-select">
      <option value="" disabled selected>My Balance</option>
      <option value="usd">USD</option>
      <option value="rupees">Rupees</option>
      <option value="sgd">SGD</option>
    </select>
    
    <h3 className='cost-label'></h3>
          <input type="text" id="cost-input" className="cost-input" placeholder="                                        USD" />
    <h3 className='from'>To</h3>
         <select id="type-select">
      <option value="" disabled selected>Bitcoin</option>
      <option value="usd">USD</option>
      <option value="rupees">Rupees</option>
      <option value="sgd">SGD</option>
    </select>
    <h3 className='cost-label'></h3>
          <input type="text" id="cost-input" className="cost-input" placeholder="                                         BTC" />
          <button className='end-button'>Buy</button>
        </div>
    <img id="img" src={bitcoin} width="30px" height="30px"/></div>
  )
}
