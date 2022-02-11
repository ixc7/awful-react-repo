import Stars from './stars'

const Card = props => {
  const { title, stars, text, author, date } = props

  return (
    <div className='card'>
      <div className='card-title'>{title}</div>
      <div className='card-stars'>
        <Stars count={stars} />
      </div>

      <div className='card-text'>{text}</div>

      <div className='card-author-date-row'>
        <div className='card-author'>{author}</div>
        <div className='card-date'>{date}</div>
      </div>

      <div className='comments-icon fa fa-msg' />
    </div>
  )
}

export default Card
