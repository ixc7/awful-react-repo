import '../scss/icons.scss'

function App() {
  return (
    <>
      <div className="container">
        <header className="header"></header>
        <div className="header-title">ReVIEWS</div>

        <div className="block-l"></div>
        <div className="review-title">TACO RESTAURNT</div>
        <div className="stars"><i className="fa fa-star" /></div>
        <div className="so-good">IT SO GOOD</div>
        <div className="john-doe">JOHN dOE</div>
        <div className="review-date">99/99/2000</div>

        <div className="block-m"></div>
        <div className="more-dots"><i className="fa fa-dots" /></div>
        <div className="glad-you-liked-it">GLAD U LIKE IT</div>
        <div className="jane-doe">JANE Doe</div>
        <div className="reply-date">01/02/1999</div>
        <div className="reply-arrow"><i className="fa fa-reply" /></div>
      </div>

      <div className="container">
        <div className="block-s"></div>
        <div className="taco-johns">tacobell</div>
        <div className="taco-stars"><i className="fa fa-star" /></div>
        <div className="tacos-good">they are not good</div>
        <div className="taco-doe">person</div>
        <div className="taco-date">01/00/0000</div>
        <div className="taco-comments-icon"><i className="fa fa-msg" /></div>
      </div>
    </>
  )
}

export default App
