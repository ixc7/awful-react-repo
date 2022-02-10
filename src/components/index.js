
const Stars = props => {
  const result = []
  for (let i = 0; i < props.count; i += 1) {
    result.push(
      <i className='fa fa-star' key={i} />
    )
  }
  return result
}

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

const Reply = props => {
  const { text, author, date } = props

  return (
    <div className='reply'>
      <div className='dots fa fa-dots' />
      <div className='glad-you-liked-it'>{text}</div>
      <div className='jane-doe'>{author}</div>
      <div className='reply-date'>{date}</div>
      <div className='reply-arrow fa fa-reply' />
    </div>
  )
}

const Card = props => {
  const { title, stars, text, author, date } = props

  return (
    <div className='card'>
      <div className='card-title'>{title}</div>
      <div className='card-stars'>
        <Stars count={stars} />
      </div>
      <div className='card-text'>{text}</div>
      <div className='card-author'>{author}</div>
      <div className='card-date'>{date}</div>
      <div className='card-comments fa fa-msg' />
    </div>
  )
}

const App = () => {
  return (
    <div className='container'>

      <header className='header'>
        <div className='header-title'>ReVIEWS</div>
      </header>

      <Review
        title='tACO TRUCK'
        stars='5'
        text='ITs SOOO GOOd'
        author='john Doe'
        date='04/17/1998'
      />

      <Reply
        text='gld U LIKE it'
        author='taco laduy'
        date='04/17/1944'
      />

      <Card
        title='taco bell'
        stars='3'
        text='its okay'
        author='john awayne'
        date='01/02/2003'
      />

    </div>
  )
}

export default App
