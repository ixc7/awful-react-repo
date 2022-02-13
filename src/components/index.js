import { useState } from 'react'
import { STRESSTXT, truncate } from './utils'
import Header from './header'
import CardSection from './cardSection'
import ReviewSection from './reviewSection'

const App = () => {
  const [view, setView] = useState({cards: 'visible', review: 'hidden'})
  const toggle = v => view[v] === 'hidden' ? 'visible' : 'hidden'

  {/*
    const [review, setReview] = useState({
      title: truncate(STRESSTXT, 80),
      stars: 5,
      text: STRESSTXT,
      author: truncate(STRESSTXT, 18),
      date:  truncate(STRESSTXT, 10)
    })
    
    const [reply, setReply] = useState({
      text: STRESSTXT,
      author: truncate(STRESSTXT, 18),
      date:  truncate(STRESSTXT, 10)
    })

  */}  

  return (
    <div className='container'>
      <div onClick={() => {
        setView({ cards: toggle('cards'), review: toggle('review') })
      }}>
        <Header title='Reviews'/>
      </div>

      <div className={view.review}>
        <ReviewSection />
      </div>

      <div className={view.cards}>
        <CardSection />
      </div>

    </div>
  )
}

export default App
