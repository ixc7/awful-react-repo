import Stars from './stars'

const Review = props => {
  const { title, stars, text, author, date } = props
  return (

    <div className='review'>
      <div className='review-title'>{title}</div>
      <div className='review-stars'>
        <Stars count={stars} />
      </div>
      <div className='review-text'>{text}</div>
      <div className='review-author'>{author}</div>
      <div className='review-date'>{date}</div>
    </div>
  )
}

export default Review
