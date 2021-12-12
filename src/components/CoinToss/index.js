// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    isEven: 'heads',
  }

  buttonClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        isEven: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        isEven: 'tails',
      }))
    }
  }

  render() {
    const {isEven, total, heads, tails} = this.state
    return (
      <div className="main-container">
        <div className="inner-holder">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img
            className="image"
            src={`https://assets.ccbp.in/frontend/react-js/${isEven}-img.png`}
            alt="toss result"
          />
          <button type="button" className="btn" onClick={this.buttonClick}>
            Toss Coin
          </button>
          <div className="para-holder">
            <p className="para1">Total: {total}</p>
            <p className="para1">Heads: {heads}</p>
            <p className="para1">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
