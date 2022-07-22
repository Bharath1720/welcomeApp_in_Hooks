import {useState} from 'react'
import './index.css'

const WelcomeFunctional = () => {
  const [isSubscribed, setIsSubscribed] = useState(true)
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed)
  }

  return (
    <div className="main-container">
      <h1>Welcome</h1>
      <p>Thank you! Happy Learning</p>
      <button onClick={handleSubscribe} type="button">
        {isSubscribed ? 'Subscribed' : 'Subscribe'}
      </button>
    </div>
  )
}
export default WelcomeFunctional
