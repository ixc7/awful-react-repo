import React, { useContext } from 'react'
import { Global } from './index'

const header = () => {
  const { setView, setId } = useContext(Global)
  return (
    <div className='header'>
      <div
        className='header-title'
        onClick={() => {
          setView({ review: 'hidden' })
          setId(0)
        }}
      >
        Reviews
      </div>
    </div>
  )
}

export default header
