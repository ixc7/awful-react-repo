
const Reply = props => {
  const { text, author, date } = props

  return (
    <div className='reply'>
      <div className='dots fa fa-dots' />
      <div className='reply-text'>{text}</div>
      <div className='reply-author'>{author}</div>
      <div className='reply-date'>{date}</div>
      <div className='reply-arrow fa fa-reply' />
    </div>
  )
}

export default Reply
