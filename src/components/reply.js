import React, { createContext, useContext, useState } from 'react'
import { Global } from './index'
import { formatDate } from './utils'

const Local = createContext()

const Input = () => {
  const { id } = useContext(Global)
  const { update, placeholder, setPlaceholder } = useContext(Local)
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
      setPlaceholder('Type your reply here')
      setMsg('')
    }
  }

  return (
    <div className={localStorage.getItem(id) ? 'hidden' : 'visible'}>
      <form onSubmit={setReply}>
        <input type='text' placeholder={placeholder} value={msg} onChange={e => setMsg(e.target.value)} />
      </form>
      <div className='reply-icon fa fa-reply' onClick={setReply}  />
    </div>
  )
}

const Content = () => {
  const { id } = useContext(Global)
  const { update, placeholder, setPlaceholder } = useContext(Local)
  const getField = field => JSON.parse(localStorage.getItem(id) || 0)[field]

  const remove = () => {
      localStorage.removeItem(id)
      // TODO manual render w/ localStorage get rid of this.
      update(Math.random())
  }

  const edit = () => {
    setPlaceholder(getField('content'))
    remove()
  }

  return (
    <div className={localStorage.getItem(id) ? 'visible' : 'hidden'}>
      <div className='reply-text'>{getField('content')}</div>
      <div className='reply-author-date-row'>
        <div className='reply-author'>{getField('author')}</div>
        <div className='reply-date'>{formatDate(getField('published_at'))}</div>
      </div>

      <div className='dots-icon fa fa-dots'>
        <div className='dot-options'>
          <div onClick={edit}>edit</div>
          <div onClick={remove}>delete</div>
        </div>
      </div>
    </div>
  )
}

const Reply = () => {
  const [current, update] = useState()
  const [placeholder, setPlaceholder] = useState('Type your reply here')

  return (
    <Local.Provider value={{ current, update, placeholder, setPlaceholder }}>
      <div className='reply'>
        <Content />
        <Input />
      </div>
    </Local.Provider>
  )
}

export default Reply
