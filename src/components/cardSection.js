import Card from './card'
import data from '../static/data.json'
import { STRESSTXT, truncate, formatDate } from './utils'

const AllCards = props => {
  const cards = data.map((item, index) => {
    const { author, place, published_at, rating, content, id } = item
    return (
      <Card
        title={truncate(STRESSTXT, 18)}
        stars={100}
        text={STRESSTXT}
        author={truncate(STRESSTXT, 18)}
        date={formatDate(published_at)}
        key={id}
      />
    )
  })

  return (
    <div className='cards-container'>
      {cards}
    </div>
  )
}

export default AllCards
