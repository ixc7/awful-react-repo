import Card from './card'
import data from '../static/data.json'

const AllCards = props => {
  const cards = data.map((item, index) => {
    const {author, place, published_at, rating, content, id} = item
    return (
      <Card
        title={place}
        stars={rating}
        text={content}
        author={author}
        date={published_at}
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
