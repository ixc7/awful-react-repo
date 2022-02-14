import React from 'react'
import { formatDate } from './utils'

// TODO this should be the only one using localStorage

const Reply = ({ text, author, date }) => (
  <div className='reply'>
    <div className='reply-text'>{text}</div>
    <div className='reply-author-date-row'>
      <div className='reply-author'>{author}</div>
      <div className='reply-date'>{formatDate(date)}</div>
    </div>
    <div className='reply-icon fa fa-reply' />
    <div className='dots-icon fa fa-dots' />
  </div>
)

export default Reply
