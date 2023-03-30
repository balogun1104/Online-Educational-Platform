import React from 'react'
import './styles.css'
import Done from '../../assests/images/done.svg'
const PageSucessLoader = () => {
  return (
    <div className='loaderWrapper'>
        <div className='loaderWrapperInner'>
           <h1>You've successfully submittted</h1>
           <img src={Done} className='imgLoader'
           
           />
           </div>
    </div>
 
  )
}

export default PageSucessLoader