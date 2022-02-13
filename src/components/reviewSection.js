import Review from './review'
import Reply from './reply'

import { STRESSTXT, truncate } from './utils'

const placeholder = {
  review: {
    title: truncate(STRESSTXT, 80),
    stars: 5,
    text: STRESSTXT,
    author: truncate(STRESSTXT, 18),
    date:  truncate(STRESSTXT, 10)
  },
  reply: {
    text: STRESSTXT,
    author: truncate(STRESSTXT, 18),
    date:  truncate(STRESSTXT, 10)
  }
}

const reviewSection = () => {
  const { review, reply } = placeholder

  return (
    <div className='review-container'>
      <Review
        title={review.title}
        stars={review.stars}
        text={review.text}
        author={review.author}
        date={review.date}
      />
      <Reply
        text={reply.text}
        author={reply.author}
        date={reply.date}
      />
    </div>
  )
}

export default reviewSection
