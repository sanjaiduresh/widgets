import React from 'react'
import './Home.css'
import CurrentBalance from "./CurrentBalance";
import Exchange from "./Exchange";
import RecentTransaction from "./RecentTransaction";
import TopBar from './TopBar';
import BalanceQuickAction from './BalanceQuickAction';



export default function Home() {
  return (
    <>
    <TopBar></TopBar>
   
    <div className='main' >
        <div>
        <CurrentBalance></CurrentBalance>
        </div>
        <div>
        <RecentTransaction></RecentTransaction>
        </div>
        <div>
        <Exchange></Exchange>
        </div>
        <div>
        <BalanceQuickAction></BalanceQuickAction>
        </div>

    </div>
    </>
    
  )
}
