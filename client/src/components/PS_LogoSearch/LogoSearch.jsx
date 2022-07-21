import React from 'react'

import Logo from '../../img/logo.png'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import './LogoSearch.css'


const LogoSearch = () => {
  return (
   <div className="LogoSearch">
       <img src={Logo} alt="" />
       <div className="Search">
           <input type="text" placeholder='Discover new technologies' />
           <div className="s-icon">
               <SearchRoundedIcon/>
           </div>
       </div>
   </div>
  )
}

export default LogoSearch