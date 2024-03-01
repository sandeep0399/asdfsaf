import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  deleteTodo = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="Cash-container">
          <div className="profile">
            <div className="profile-pic">S</div>
            <p className="heading">Sandeep Thalari</p>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <p className="balance">{balance}</p>
          </div>
          <div>
            <p className="withdraw-heading">Withdraw</p>
            <p className="withdraw-disc">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="unorder-list">
            {denominationsList.map(eachitem => (
              <DenominationItem destinationDetails={eachitem} key={eachitem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
