import React, { Component } from "react";

// components
import TransactionList from "./TransactionList";

class AccountContainer extends Component {
  // state variables
  state = {
    transactions: [],
  };

  // fetch data from db.json
  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((res) => res.json())
      .then((responseData) => {
        this.setState({ transactions: responseData });
      });
  }

  render() {
    return (
      <div>
        <TransactionList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
