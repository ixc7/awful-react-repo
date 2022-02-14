import React from 'react'
import Card from './card'
import data from '../static/data.json'
import { truncate, formatDate } from './utils'

const AllCards = () => (
  <div className='cards-container'>
    {data.map(
      ({ author, place, published_at, rating, content, id }) => {
        return (
          <Card
            emitter={x => console.log(`GOT: ${x}`)}
            place={truncate(place, 18)}
            rating={rating}
            content={truncate(content, 140, '...')}
            author={truncate(author, 18)}
            published_at={formatDate(published_at)}
            id={id}
            key={id}
          />
        )
      }
    )}
  </div>
)

export default AllCards
