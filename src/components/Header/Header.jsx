import React from 'react'
import HeaderAll from './HeaderAll'
import HeaderLogin from './HeaderLogin'
import { useUserAuth } from "../../context/UserAuthContext";

const Header = (isLogin) => {
  const signOut  = useUserAuth();
  
  return (
  <div>
 <HeaderLogin/>
  </div>
  )
}

export default Header
