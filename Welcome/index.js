import {Component} from 'react'
import './index.css'

export default class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  handleButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    console.log(isSubscribed)
    return (
      <div className="main-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button onClick={this.handleButton} type="button">
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}
