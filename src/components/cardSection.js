import React from 'react'
import Card from './card'
import data from '../static/data.json'
import { STRESSTXT, truncate, formatDate } from './utils'

const AllCards = () => {
  const cards = data.map((item, index) => {
    const { author, place, published_at, rating, content, id } = item
    return (
      <Card
        title={truncate(place, 18)}
        stars={rating}
        text={truncate(content, 140, '...')}
        author={truncate(author, 18)}
        date={formatDate(published_at)}
        key={id}
      />
    )
  })

  return <div className='cards-container'>{cards}</div>
}

export default AllCards
