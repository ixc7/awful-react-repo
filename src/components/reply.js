import React, { useContext, useState } from 'react'
import { Context } from './index'
import { formatDate } from './utils'

// TODO this should be the only one using localStorage

const Reply = () => {
  const { id } = useContext(Context)
  const [msg, setMsg] = useState('')
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem(id) || false))
  const { content, author, published_at } = storage
  
  const setReply = () => {
    localStorage.setItem(id, JSON.stringify({
      author: 'published by you',
      published_at: Date.now(),
      content: msg
    }))
    setStorage(JSON.parse(localStorage.getItem(id) || false))
  }
  
  return (
    <div className='reply'>
      <div className='reply-text'>{content}</div>
      <div className='reply-author-date-row'>
        <div className='reply-author'>{author}</div>
        <div className='reply-date'>{formatDate(published_at)}</div>
      </div>
      <div className='reply-icon fa fa-reply' />
      <div className='dots-icon fa fa-dots' />
        <textarea value={msg} onChange={e => setMsg(e.target.value)} />
        <button onClick={setReply}>submit</button>
    </div>
  )
}

export default Reply
