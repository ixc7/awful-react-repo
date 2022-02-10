import Header from './header'
import Review from './review'
import Card from './card'
import Reply from './reply'

const App = () => {
  return (
    <div className='container'>

      <Header title="reviewsdot com" />

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
