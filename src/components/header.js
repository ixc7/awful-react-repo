import React, { useContext } from 'react'
import { Context } from './index'

const header = () => {
  const { setView } = useContext(Context)
  return (
    <div className='header'>
      <div
        className='header-title'
        onClick={() => setView({ review: 'hidden' })}
      >
        Reviews
      </div>
    </div>
  )
}

export default header
