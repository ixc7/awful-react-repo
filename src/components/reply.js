import React, { createContext, useContext, useState } from 'react'
import { Global } from './index'
import { formatDate } from './utils'

const Local = createContext()

const Input = () => {
  const { id } = useContext(Global)
  const { update } = useContext(Local)
  const [msg, setMsg] = useState('')
  
  const setReply = () => {
    if (msg.length) {
      localStorage.setItem(
        id,
        JSON.stringify({
          author: 'published by you',
          published_at: Date.now(),
          content: msg
        })
      )
    }
    update(id)
    setMsg('')
  }

  return (
    <div className={localStorage.getItem(id) ? 'hidden' : 'visible'}>
      <textarea value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={setReply}>
        <div className='reply-icon fa fa-reply' />
      </button>
    </div>
  )
}

const Text = () => {
  const { id } = useContext(Global)
  const { update } = useContext(Local)
  const getField = field => JSON.parse(localStorage.getItem(id) || 0)[field]

  const remove = () => {
    if (localStorage.getItem(id)) { 
      localStorage.removeItem(id)
      update(Math.random())
    }
  }
  
  return (
    <div className={localStorage.getItem(id) ? 'visible' : 'hidden'}>
      <div className='reply-text'>{getField('content')}</div>
      <div className='reply-author-date-row'>
        <div className='reply-author'>{getField('author')}</div>
        <div className='reply-date'>{formatDate(getField('published_at'))}</div>
      </div>
      <button className='dots-icon fa fa-dots' onClick={remove} />
      <button className='dots-icon fa fa-dots' onClick={remove} />
    </div>
  )
}

const Reply = () => {
  const { id } = useContext(Global)
  const [current, update] = useState()
  
  return (
    <Local.Provider value={{current, update}}>
      <div className='reply'>
        <Text />
        <Input />
      </div>
    </Local.Provider>
  )
}

export default Reply
