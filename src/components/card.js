import React from 'react'
import Stars from './stars'

const Card = ({ author, place, published_at, rating, content, id, emitter }) => (
  <div className='card' onClick={() => emitter(id)}>
    <div className='card-title'>{place}</div>
    <div className='card-stars'>
      <Stars count={rating} />
    </div>
    <div className='card-text'>{content}</div>
    <div className='card-author-date-row'>
      <div className='card-author'>{author}</div>
      <div className='card-date'>{published_at}</div>
    </div>
    <div className='comments-icon fa fa-msg' />
  </div>
)

export default Card
