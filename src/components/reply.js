import React, { useContext, useState } from 'react'
import { Context } from './index'
import { formatDate } from './utils'

const Reply = () => {
  const { id } = useContext(Context)
  const [msg, setMsg] = useState('')

  const getField = field => JSON.parse(localStorage.getItem(id) || 0)[field]
  
  const setReply = () => {
    localStorage.setItem(id, JSON.stringify({
      author: 'published by you',
      published_at: Date.now(),
      content: msg
    }))
    setMsg('')
  }
  
  return (
    <div className='reply'>
      <div className='reply-text'>{getField('content')}</div>
      <div className='reply-author-date-row'>
        <div className='reply-author'>{getField('author')}</div>
        <div className='reply-date'>{formatDate(getField('published_at'))}</div>
      </div>
      <div className='reply-icon fa fa-reply' />
      <div className='dots-icon fa fa-dots' />
        <textarea value={msg} onChange={e => setMsg(e.target.value)} />
        <button onClick={setReply}>submit</button>
    </div>
  )
}

export default Reply
