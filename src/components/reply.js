import React, { createContext, useContext, useState, useEffect } from 'react'
import { Global } from './index'
import { formatDate } from './utils'

const Local = createContext()

const Input = () => {
  const { id } = useContext(Global)
  const { val, setVal, inp, placeholder, setPlaceholder } = useContext(Local)
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
      setVal(localStorage.getItem(id))
      setPlaceholder('Type your reply here')
      setMsg('')
    }
  }
  return (
    <div className={inp}>
      <form onSubmit={setReply}>
        <input type='text' placeholder={placeholder} value={msg} onChange={e => setMsg(e.target.value)} />
      </form>
      <div className='reply-icon fa fa-reply' onClick={setReply}  />
    </div>
  )
}

const Content = () => {
  const { id } = useContext(Global)
  const { val, cot, placeholder, setPlaceholder } = useContext(Local)
  const getField = field => JSON.parse(localStorage.getItem(id) || 0)[field]
  
  const remove = () => {
    setPlaceholder(getField('content'))
    localStorage.removeItem(id)
  }

  const edit = () => {
    setPlaceholder(getField('content'))
    localStorage.removeItem(id)
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

  const [placeholder, setPlaceholder] = useState('Type your reply here')
  const [val, setVal] = useState(getId())

  useEffect(() => {
    const handler = () => val !== getId() && setVal(getId())
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  })
  
  useEffect(() => setVal(getId()), [id])
  const inp = getId() ? 'hidden' : 'visible'
  const cot = getId()  ? 'visible' : 'hidden'

  return (
    <Local.Provider value={{ val, setVal, inp, cot, placeholder, setPlaceholder }}>
      <div className='reply'>
        <Content />
        <Input />
      </div>
    </Local.Provider>
  )
}

export default Reply
