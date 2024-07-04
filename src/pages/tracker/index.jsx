import React from "react";
import {useAddTransaction} from "../../hooks/useAddTransaction";
import {useGetTransactions} from "../../hooks/useGetTransactions";
import { useState } from "react";
import {useGetInfo} from "../../hooks/useGetInfo"
import "./style.css";



export const ExpenseTracker = () => {
    const {addTransaction} = useAddTransaction();
    const { transactions, transactionTotals } = useGetTransactions();
    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");
    const {name, profilePhoto} = useGetInfo();

    const {balance, income, expenses} = transactionTotals;
    const onSubmit = (e) => {
        e.preventDefault()
        addTransaction({description, transactionAmount, transactionType});
    }

    return (
        <>
        <div className="expense-tracker">
            <div className="container">
            <h1> {name}'s Expense Tracker</h1>
          <div className="balance">
            <h3> Your Balance</h3>
            {balance >= 0 ? <h2> ${balance}</h2> : <h2> -${balance * -1}</h2>}
          </div>
          <div className="summary">
            <div className="income">
              <h4> Income</h4>
              <p>${income}</p>
            </div>
            <div className="expenses">
              <h4> Expenses</h4>
              <p>${expenses}</p>
            </div>
                    <form className="add-transaction" onSubmit={onSubmit}>
                        <input 
                        type = "text" 
                        placeholder="Description" 
                        onChange={(e) => setDescription(e.target.value)}
                        required />
                        <input type = "number" placeholder="Amount" onChange={(e) => setTransactionAmount(e.target.value)} required />
                        <input type = "radio" id = " expense" value = "expense" 
                        onChange={(e) => setTransactionType(e.target.value)}
                        checked = {transactionType === "expense"} 
                        />
                        <label htmlFor="expense"> Expense </label>
                        <input type = "radio" id = " income" value = "income" checked = {transactionType === "income"} onChange={(e) => setTransactionType(e.target.value)}/>
                        <label htmlFor="income"> Income </label>
                        <button className="submit">Add Transaction</button>
                    </form>
                </div>
                
            </div>
            {profilePhoto && (<div className="profile"> 
                    <img className="profile-photo" src = {profilePhoto}/>
                </div>)
                }
        </div>

        <div className="transactions">
            <h3>
                Transactions
            </h3>
            <ul>
                {
                    transactions.map((transaction) => {
                        const {description, transactionAmount, transactionType} = transaction;
                        return (
                        <li>
                            <h4> {description}</h4>
                            <p>
                                $ {transactionAmount} | <label style={{color : transactionType === "expense"? "red":"green"}}>{transactionType} </label>
                            </p>
                        </li>
                        )
                    }
                    )
                }
            </ul>

        </div>
        </>
    )
};