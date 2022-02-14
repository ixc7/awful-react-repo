import React, { createContext, useContext, useState } from 'react'
import { Global } from './index'
import { formatDate } from './utils'

const Local = createContext()

const Input = () => {
  const { id } = useContext(Global)
  const { update } = useContext(Local)
  const [msg, setMsg] = useState('')

  const setReply = e => {
    e.preventDefault()
    if (msg.length) {
      localStorage.setItem(
        id,
        JSON.stringify({
          author: 'published by you',
          published_at: Date.now(),
          content: msg
        })
      )
      update(id)
      setMsg('')
    }
  }

  return (
    <div className={localStorage.getItem(id) ? 'hidden' : 'visible'}>
      <form onSubmit={setReply}>
        <input type='text' placeholder='Type your reply here' value={msg} onChange={e => setMsg(e.target.value)} />
      </form>
      <div className='reply-icon fa fa-reply' onClick={setReply}  />
    </div>
  )
}

const Text = () => {
  const { id } = useContext(Global)
  const { update } = useContext(Local)
  const getField = field => JSON.parse(localStorage.getItem(id) || 0)[field]

  const remove = () => {
      localStorage.removeItem(id)
      // TODO manual render w/ localStorage get rid of this.
      update(Math.random())
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
  const [current, update] = useState()
  
  return (
    <Local.Provider value={{ current, update }}>
      <div className='reply'>
        <Text />
        <Input />
      </div>
    </Local.Provider>
  )
}

export default Reply
