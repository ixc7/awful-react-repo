
const Stars = props => {
  const result = []
  for (let i = 0; i < props.count; i += 1) {
    result.push(
      <i className='fa fa-star' key={i} />
    )
  }
  return result
}

export default Stars
