import Header from './header'
import Review from './review'
import CardSection from './cardSection'
import Reply from './reply'

const App = () => {
  return (
    <div className='container'>
      <Header title='Reviews' />

      <CardSection />

      <div className='review-container'>
        <Review
          title="Taco John's"
          stars='5'
          text='So gooood!'
          author='john Doe'
          date='01/01/2019'
        />
        <Reply
          text='Glad you Liked it!'
          author='Jane Doe'
          date='01/01/2019'
        />
      </div>

    </div>
  )
}

export default App
