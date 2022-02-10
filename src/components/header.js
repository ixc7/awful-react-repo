const Header = props => {
  const { title } = props
  return (
    <header className='header'>
      <div className='header-title'>{title}</div>
    </header>
  )
}

export default Header
