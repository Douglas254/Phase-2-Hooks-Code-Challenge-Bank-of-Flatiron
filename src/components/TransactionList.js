import React from "react";

// components
import Transaction from "./Transaction";

const TransactionList = (props) => {
  // map through the transactions array and assign to a variable displayTransactionArray
  let displayTransactionArray = props.transactions.map((transactionObj) => {
    return <Transaction key={transactionObj.id} transaction={transactionObj} />;
  });
  return (
    <div>
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
          </tr>
          {displayTransactionArray}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
