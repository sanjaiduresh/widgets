import React, { useState } from 'react';
import balance from './Images/money.png'
import bitcoin from './Images/Bitcoin.jpeg'

import './Exchange.css'

export default function Exchange() {
    const currentDate = new Date();
    let meridiem = "AM"; 
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes(); 
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }
    minutes = (minutes < 10 ? "0" : "") + minutes;

    // Construct the time string in 12-hour format with AM or PM
    let timeString = hours + ":" + minutes + meridiem;


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
    const handleBuyExchange = () => {
        const data = {
            type: selectedFromCurrency+selectedToCurrency,
            time: timeString,
            amount:"+"+ inputValue,
            status : "completed",
        };
        console.log(data)

        fetch('http://localhost:8000/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log('Data posted successfully');
        })
        .catch(error => {
            console.error('Error posting data:', error);
        });
    };
    const handleSellExchange = () => {
        const data = {
            type: selectedFromCurrency+selectedToCurrency,
            time: timeString,
            amount: "-"+inputValue,
            status : "completed",
        };
        console.log(data)

        fetch('http://localhost:8000/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log('Data posted successfully');
        })
        .catch(error => {
            console.error('Error posting data:', error);
        });
    };
    return (
        <>
            <div className='frame'>
                <h1 className='text'>Exchange</h1>
                <div className='buttons'>
                    <button className='buy-button' onClick={() => setDisplay(true)}>Buy</button>
                    <button className='sell-button' onClick={() => setDisplay(false)}>Sell</button>
                </div>
                <div>
                    {display ? (<div>
                        <div className='exchange-select'>
                        <h3 className='from'>From</h3>
                        <img className="exchange-img" src={balance} alt="money" />
                        <select id="type-select" value={selectedFromCurrency} onChange={handleFromCurrencyChange}>
                            <option value="" disabled selected> My Balance</option>
                            <option value="BTC">Bitcoin</option>
                            <option value="ETH">Ethereum</option>
                            <option value="CAR">Cardano</option>
                        </select>
                        </div>
                        <h3 className='cost-label'></h3>
                        <div className='to-amnt'>
                            <input type="text" id="cost-input" className="cost-input" value={inputValue} onChange={handleInputChange} /><span className='to-amnt-span'>{selectedFromCurrency}</span>
                        </div>
                        <h3 className='from'>To</h3>
                        <div className='exchange-select'>
                        <img className="exchange-img" src={bitcoin} alt='bitcoin' />
                        <select id="type-select" value={selectedToCurrency} onChange={handleToCurrencyChange}>
                            <option value="" disabled selected>Bitcoin</option>
                            <option value="BTC">Bitcoin</option>
                            <option value="ETH">Ethereum</option>
                            <option value="CAR">Cardano</option>
                        </select>
                        </div>
                        <h3 className='cost-label'></h3>
                        <div className='to-amnt'>
                            <input type="text" id="cost-input" className="cost-input" /><span className='to-amnt-span'>{selectedToCurrency}</span>
                        </div>
                        <div className='exchange-bs-btn'> 

                        <button className='end-button' onClick={handleBuyExchange}>Buy</button>
                        </div>

                    </div>) : (<div>
                        <div className='exchange-select'>
                        <img className="exchange-img" src={bitcoin} />
                        <select id="type-select" value={selectedFromCurrency} onChange={handleFromCurrencyChange}>
                            <option value="" disabled selected>MyBalance</option>
                            <option value="BTC">Bitcoin</option>
                            <option value="ETH">Ethereum</option>
                            <option value="CAR">Cardano</option>
                        </select>
                        </div>
                        <h3 className='cost-label'></h3>
                        <div className='to-amnt'>
                            <input type="text" id="cost-input" className="cost-input" /><span className='to-amnt-span'>{selectedFromCurrency}</span>
                        </div>
                        <div className='exchange-bs-btn'> 
                        <button className='end-button' onClick={handleSellExchange}>Sell</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    );
}
