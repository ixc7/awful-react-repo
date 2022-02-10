
const Reply = props => {
  const { text, author, date } = props

  return (
    <div className='reply'>
      <div className='reply-text'>{text}</div>
      <div className='reply-author'>{author}</div>
      <div className='reply-date'>{date}</div>
      <div className='reply-icon fa fa-reply' />
      <div className='dots-icon fa fa-dots' />
    </div>
  )
}

export default Reply
