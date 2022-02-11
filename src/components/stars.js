
const Stars = props => {
  const result = []
  const count = props.count > 5 ? 5 : props.count
  for (let i = 0; i < count; i += 1) {
    result.push(
      <i className='fa fa-star' key={i} />
    )
  }
  return result
}

export default Stars
