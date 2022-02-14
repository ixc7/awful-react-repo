import React, { createContext, useContext, useState } from 'react'
import { Context } from './index'
import { formatDate } from './utils'

const ReplyContext = createContext()

const InputBox = () => {
  const { id } = useContext(Context)
  const { visible, setVisible } = useContext(ReplyContext)
  const [msg, setMsg] = useState('')

  const setReply = type => {
    localStorage.setItem(
      id,
      JSON.stringify({
        author: 'published by you',
        published_at: Date.now(),
        content: msg
      })
    )
    setMsg('')
    setVisible({editor: 'hidden', content: 'visible'})
  }

  return (
    <div className={visible.editor}>
      <textarea value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={setReply}>
        <div className='reply-icon fa fa-reply' />
      </button>
    </div>
  )
}

const ReplyText = () => {
  const { id } = useContext(Context)
  const { visible, setVisible } = useContext(ReplyContext)
  const getField = field => JSON.parse(localStorage.getItem(id) || 0)[field]
  
  const edit = () => {
    setVisible({content: 'visible', editor: 'visible'})
  }

  const remove = () => {
    localStorage.removeItem(id)
    setVisible({content: 'hidden', editor: 'visible'})
  }
  
  return (
    <div
      style={{ background: 'magenta' }}
      className={visible.content}
    >
      <div className='reply-text'>{getField('content')}</div>
      <div className='reply-author-date-row'>
        <div className='reply-author'>{getField('author')}</div>
        <div className='reply-date'>{formatDate(getField('published_at'))}</div>
      </div>

      <button
        className='dots-icon fa fa-dots'
        onClick={edit}
      />
      <button
        className='dots-icon fa fa-dots'
        onClick={remove}
      />
    </div>
  )
}

const Reply = () => {
  const [visible, setVisible] = useState({ content: 'hidden', editor: 'visible'})
  
  return (
    <ReplyContext.Provider value={{ visible, setVisible }}>
      <div className='reply'>
        <ReplyText />
        <InputBox />
      </div>
    </ReplyContext.Provider>
  )
}

export default Reply
