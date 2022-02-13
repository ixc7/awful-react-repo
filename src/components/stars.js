import React from 'react'

const Stars = ({ count }) => {
  const result = []
  const total = count > 5 ? 5 : count

  for (let i = 0; i < total; i += 1) { result.push(<i className='fa fa-star' key={i} />) }

  return result
}

export default Stars
