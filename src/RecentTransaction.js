import React, { useEffect, useState } from 'react';
import './App.css'; // Assuming your CSS file
import refresh from './Images/loading-arrow.png';
import threedots from './Images/Threedots.jpg';
import blue from './Images/Blue.jpeg';
import red from './Images/Red.jpg';
import yellow from './Images/Yellow.jpg';
import './RecentTranscation.css'
function App() {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/transaction');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const transactionData = await response.json();
        setTransactionData(transactionData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getImageForStatus = (status) => {
    switch (status) {
      case 'Pending':
        return yellow;
      case 'Failed':
        return red;
      case 'Completed':
        return blue;
      default:
        return null;
    }
  };

  return (
    <div className='main-grid'>
      <div className='grid'>
        <div className='title'>
          <img src={refresh} alt="refresh" className='refresh-img' /><span>Recent Transaction</span>
        </div>
        <div >
          <img src={threedots} alt="threedots" className='threedots' />
        </div>
      </div>
   
      <table>
        <thead>
          <tr className='table-header'>
            <td>Type</td>
            <td>Amount</td>
            <td>Time</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.time}</td>
              <td>
                <img src={getImageForStatus(item.status)}  className='status-img' />
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
