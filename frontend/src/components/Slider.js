import React from 'react';
import './Slider.css'

export const Slider = ({children}) => {




  return(
    <div className='main-container'>
      <div className='window'>
        <div className='all-pages-container'>{children}</div>
      </div>
    </div>
    
  )
}