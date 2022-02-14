import React, { useContext } from 'react'
import { Global } from './index'
import Review from './review'
import Reply from './reply'
import data from '../static/data.json'

const reviewSection = () => {
  const { id, view } = useContext(Global)

  const { place, rating, content, author, published_at } =
    data.filter(x => x.id === id)[0] || false

  return (
    <div className={`review-container ${view.review}`}>
      <Review
        place={place}
        rating={rating}
        content={content}
        author={author}
        published_at={published_at}
      />
      <Reply />
    </div>
  )
}

export default reviewSection
