import React from 'react'
import "./RecentTranscation.css"
import refresh from './Images/Refresh.jpeg'
import threedots from './Images/Threedots.jpg'
import blue from './Images/Blue.jpeg'
import red from './Images/Red.jpg'
import yellow from './Images/Yellow.jpg'

export default function RecentTransaction() {
  return (
<div className='main-grid'>
<div className='grid'>
    <div className='title'>
    <img src={refresh} alt="refresh" className='refresh-img'/><span>Recent Transaction</span> 
    </div>
    <div >
      <img src={threedots} alt="threedots" className='threedots'/>
    </div>
</div>

<table>
    <tr className='table-header'>
    <td >Type</td>
    <td>Amount</td>
    <td>Time</td>
    <td>Status</td>
    </tr>
    <tr>
        <td>BTCUSDT</td>
        <td>+$1,212.32</td>
        <td>02.32PM</td>
        <td><img  src={yellow} alt="yellow" className='status-img'/>Pending</td>

    </tr>
    <tr>
        <td>BTCUSDT</td>
        <td>+$1,212.32</td>
        <td>02.32PM</td>
        <td><img  src={red} alt="red" className='status-img'/>Failed</td>

    </tr> <tr>
        <td>BTCUSDT</td>
        <td>+$1,212.32</td>
        <td>02.32PM</td>
        <td><img  src={blue} alt="blue" className='status-img'/>Completed</td>

    </tr>
</table>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>
</div>  
)}
