import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 0,
      type: "number"
    }
  }

    handleDepositClick(e) {
      e.preventDefault();
      let amount = parseInt(this.inputBox.value);
      let newBalance = this.state.balance + amount;

      this.setState({
       balance: newBalance
      })

      this.inputBox.value = '';
    }

  handleWithdrawClick(e) {
    e.preventDefault();

    let currentAmount = this.state.balance;

    let subtractAmount = parseInt(this.inputBox.value);

    let newBalance2 = currentAmount - subtractAmount;

    if ((newBalance2 >= 0) === true && (newBalance2 !== NaN)) {
      this.setState ({
        balance: newBalance2
      })
    } else {
      alert("Insufficient Funds!")
    }

    this.inputBox.value = ''
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input type="number" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)}/>
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)}/>
      </div>
    )
  }
}
