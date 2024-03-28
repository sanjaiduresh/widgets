import React from 'react'
import './Home.css'
import CurrentBalance from "./CurrentBalance";
import Exchange from "./Exchange";
import RecentTransaction from "./RecentTransaction";

export default function Home() {
  return (
    <>
   
    <div className='main' >
        <div>
        <CurrentBalance></CurrentBalance>
        </div>
        <div>
        <Exchange></Exchange>

        </div>
        <div>
        <RecentTransaction></RecentTransaction>

        </div>
        <div>
        {/* <BalanceQuickAction></BalanceQuickAction> */}
        </div>

    </div>
    </>
    
  )
}
