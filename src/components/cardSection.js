import React, { useContext } from 'react'
import { Global } from './index'
import { truncate, formatDate } from './utils'
import Card from './card'
import data from '../static/data.json'

const AllCards = () => {
  const { view } = useContext(Global)

  return (
    <div className={`cards-container ${view.cards}`}>
      {data.map(({ author, place, published_at, rating, content, id }) => {
        return (
          <Card
            place={truncate(place, 18)}
            rating={rating}
            content={truncate(content, 140, '...')}
            author={truncate(author, 18)}
            published_at={formatDate(published_at)}
            id={id}
            key={id}
          />
        )
      })}
    </div>
  )
}

export default AllCards
