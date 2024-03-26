import React from 'react'
import './CurrentBalance.css'
export default function CurrentBalance() {
    return (
        <div className="card">
            <div className="card-header">
                <div id="cb"><img src="https://cdn-user-icons.flaticon.com/131441/131441980/1711357618900.svg?token=exp=1711358544~hmac=21912746284f3d6bfc395bba751a8767" className="img" />
                    <span>Current Balance</span></div>
                <select id="dropdown">
                    <option value="">USD</option>
                    <option value="option1">Rupees</option>
                    <option value="option2">Euro</option>
                    <option value="option3">SGD</option>
                </select>
            </div>
            <div className="amnt">
                <div>
                    <sup>$</sup>768768<sub>12.4%</sub>
                    <div className='compare'>Compare to $5325.32 last month</div>
                </div>
            </div>
            <div className='balance-footer'>
                <div className='balance-type'>
                    <div className='type-balance'>Available Balance</div>
                    <div><sup>$</sup>768,768</div>
                </div>

                <div className='mid-balance balance-type'>
                    <div className='type-balance'>Invested value</div>
                    <div><sup>$</sup>768,768</div>
                </div>

                <div className='balance-type'>
                    <div className='type-balance'>Profit</div>
                    <div><sup>$</sup>768,768</div>
                </div>

            </div>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>
        </div>
        
    )
}
