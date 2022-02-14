import React from 'react'
import Review from './review'
import Reply from './reply'

const reviewSection = ({review, reply}) => {
  return (
    <div className='review-container'>
      <Review
        place={review.place}
        rating={review.rating}
        content={review.content}
        author={review.author}
        published_at={review.published_at}
      />
      <Reply text={reply.text} author={reply.author} date={reply.date} />
    </div>
  )
}

export default reviewSection
