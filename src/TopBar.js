import React from 'react'
import Button from '@mui/material/Button';
import { Logout } from './Logout';
export default function TopBar() {
  return (
    <div className='header'>          <Button color="inherit" onClick={()=>Logout()}>Logout</Button>
    </div>  )
}
