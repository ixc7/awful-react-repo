import React from 'react'
import Stars from '../stars'
import { formatDate } from '../../utils'

const Review = ({ author, place, published_at, rating, content, id }) => (
  <div className='review'>
    <div className='review-title'>{place}</div>
    <div className='review-stars'>
      <Stars count={rating} />
    </div>
    <div className='review-text'>{content}</div>
    <div className='review-author-date-row'>
      <div className='review-author'>{author}</div>
      <div className='review-date'>{formatDate(published_at)}</div>
    </div>
  </div>
)

export default Review
