import React, { useState,useEffect } from 'react';
import './CurrentBalance.css';
import coin from "./Images/coin.png"
import whiteCoin from "./Images/coin white.png"
export default function CurrentBalance() {
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:8000/balance`, {
            method: "GET"
        }).then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch balance');
                }else{
                    return response.json();
                }
            })
            .then((data) => {
                const firstDataObject = data[0];
                const balanceValue = firstDataObject && firstDataObject.balance;
                setBalance(balanceValue);
                console.log(balanceValue);
            })
            .catch((error) => {
                console.error('Error fetching balance:', error);
            });
    }, []);
    
    const conversionRates = {
        USD: 1,
        Rupees: 74.29, 
        Euro: 0.85,    
        SGD: 1.35      
    };

    const currencySymbols = {
        USD: "$",
        Rupees: "₹",
        Euro: "€",
        SGD: "$"
    };

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const convertBalance = (balance, currency) => {
        const rate = conversionRates[currency];
        return (balance * rate).toFixed(2);
    };
    return (
        <div className="card">
            <div className="card-header">
                <div id="cb">
                    <img src={whiteCoin} className="img" />
                    <span>Current Balance</span>
                </div>
                <select id="dropdown" onChange={handleCurrencyChange} value={selectedCurrency}>
                    <option value="USD">USD</option>
                    <option value="Rupees">INR</option>
                    <option value="Euro">EURO</option>
                    <option value="SGD">SGD</option>
                </select>
                <img src={coin} className='header-img'></img>
            </div>
            <div className="amnt">
                <div>
                    <sup>{currencySymbols[selectedCurrency]}</sup>
                    {convertBalance(balance, selectedCurrency)}
                    <sub>12.4%</sub>
                    <div className='compare'>Compare to {currencySymbols[selectedCurrency]}{selectedCurrency === "USD" ? "5325.32" : convertBalance(5325.32, selectedCurrency)} last month</div>
                </div>
            </div>
            <div className='balance-footer'>
                <div className='balance-type'>
                    <div className='type-balance'>Available Balance</div>
                    <div><sup>{currencySymbols[selectedCurrency]}</sup>{convertBalance(balance, selectedCurrency)}</div>
                </div>

                <div className='mid-balance balance-type'>
                    <div className='type-balance'>Invested value</div>
                    <div><sup>{currencySymbols[selectedCurrency]}</sup>{convertBalance(balance, selectedCurrency)}</div>
                </div>

                <div className='balance-type'>
                    <div className='type-balance'>Profit</div>
                    <div><sup>{currencySymbols[selectedCurrency]}</sup>{convertBalance(balance, selectedCurrency)}</div>
                </div>

            </div>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
                `}
            </style>
        </div>
    );
}