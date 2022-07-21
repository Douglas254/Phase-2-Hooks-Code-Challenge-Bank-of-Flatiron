import React, { Component } from "react";
import AddTransactionForm from "./AddTransactionForm";

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

  // add transactions from the form
  addTransactionFun = (addTransaction) => {
    this.setState((prevState) => {
      return {
        transactions: [...prevState.transactions, addTransaction],
      };
    });
  };

  render() {
    return (
      <div>
        <AddTransactionForm addTransactionFun={this.addTransactionFun} />

        <TransactionList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
