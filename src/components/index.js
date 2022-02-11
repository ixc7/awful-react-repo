import Header from './header'
import Review from './review'
import CardSection from './cardSection'
import Reply from './reply'
import { STRESSTXT, truncate } from './utils'

const App = () => {
  return (
    <div className='container'>
      <Header title='Reviews' />

      <CardSection />

      <div className='review-container'>
        <Review
          title={truncate(STRESSTXT, 80)}
          stars='5'
          text={STRESSTXT}
          author={truncate(STRESSTXT, 18)}
          date='01/01/2019'
        />
        <Reply
          text={STRESSTXT}
          author={truncate(STRESSTXT, 18)}
          date='01/01/2019'
        />
      </div>

    </div>
  )
}

export default App
