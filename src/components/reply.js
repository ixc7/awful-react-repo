import React, { createContext, useContext, useState, useEffect } from 'react'
import { Global } from './index'
import { formatDate } from './utils'

const Local = createContext()

const Input = () => {
  const { id } = useContext(Global)
  const { setVal, inp } = useContext(Local)
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
      localStorage.removeItem('replyCache')
      setVal(localStorage.getItem(id))
      setMsg('')
    }
  }

  const placeholder =
    localStorage.getItem('replyCache') || 'Type your reply here ...'

  return (
    <div className={inp}>
      <form onSubmit={setReply}>
        <input
          type='text'
          placeholder={placeholder}
          value={msg}
          onChange={e => setMsg(e.target.value)}
        />
      </form>
      <div className='reply-icon fa fa-reply' onClick={setReply} />
    </div>
  )
}

const Content = () => {
  const { id } = useContext(Global)
  const { val, setVal, cot } = useContext(Local)
  const getField = field => JSON.parse(val || 0)[field]

  const remove = () => {
    localStorage.removeItem(id)
    setVal(localStorage.getItem(id))
  }

  const edit = () => {
    localStorage.setItem('replyCache', getField('content'))
    remove()
  }

  return (
    <div className={cot}>
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
  const { id } = useContext(Global)
  const getId = () => localStorage.getItem(id)

  const [val, setVal] = useState(getId())
  const inp = getId() ? 'hidden' : 'visible'
  const cot = getId() ? 'visible' : 'hidden'

  useEffect(() => {
    const handler = () => val !== getId() && setVal(getId())
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  })

  useEffect(() => {
    localStorage.removeItem('replyCache')

    setVal(getId()), [id]
  })

  return (
    <Local.Provider value={{ val, setVal, inp, cot }}>
      <div className='reply'>
        <Content />
        <Input />
      </div>
    </Local.Provider>
  )
}

export default Reply
