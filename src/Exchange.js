import React, { useState } from 'react';
import balance from './Images/money.png'
import bitcoin from './Images/Bitcoin.jpeg'
import currency from './Images/currency-exchange.jpg'


import './Exchange.css'

export default function Exchange() {

    const [display, setDisplay] = useState(true);
    const [selectedFromCurrency, setSelectedFromCurrency] = useState('BTC');
    const [selectedToCurrency, setSelectedToCurrency] = useState('BTC');
    const [inputValue, setInputValue] = useState('');
    const [storedValue, setStoredValue] = useState('');

    const handleFromCurrencyChange = (event) => {
        setSelectedFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event) => {
        setSelectedToCurrency(event.target.value);
    };
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setStoredValue(value);
    };

    return (
        <>
            <div>
                <h1>Exchange</h1>
                <div>
                    <button onClick={() => setDisplay(true)}>Buy</button>
                    <button onClick={() => setDisplay(false)}>Sell</button>
                </div>
                <div>
                    {display ? (<div>
                        <h3 className='from'>From</h3>
                        <img id="img" src={balance} width="20px" height="20px" />
                        <select id="type-select" value={selectedFromCurrency} onChange={handleFromCurrencyChange()}>
                            <option value="" disabled selected> My Balance</option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="Ethereum">Ethereum</option>
                            <option value="Cardano">Cardano</option>
                        </select>


                    </div>) : (<div>Sell content here</div>)}
                </div>
                <div>
                    <h1>from</h1>
                </div>
            </div>
        </>
    );
}
