import Card from './card'
import data from '../static/data.json'

const formatDate = str => {
  const date = new Date(str)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

const AllCards = props => {
  const cards = data.map((item, index) => {
    const {author, place, published_at, rating, content, id} = item
    return (
      <Card
        title={place}
        stars={rating}
        text={content}
        author={author}
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
