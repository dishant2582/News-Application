import React from 'react'
import loadingYellow from './IMG or GIF/loadingYellow.gif'

const Spinner = (props) => {
    return (
      <div className='text-center'>
        <img src={loadingYellow} alt="LOADING" />
      </div>
    )
}

export default Spinner
