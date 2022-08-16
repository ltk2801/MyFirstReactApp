import "./ExpensesList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  // Tạo 1 biến mới chứa content
  //   let expensesContent = <p>No expenses found.</p>;

  //   if (props.datas.length > 0) {
  //     expensesContent = props.datas.map((expense) => (
  //       <ExpenseItem
  //         // Sử dụng props key để cho react biết được là mình đang thêm mới vào
  //         key={expense.id}
  //         title={expense.title}
  //         date={expense.date}
  //         amount={expense.amount}
  //       />
  //     ));
  //   }
  if (props.datas.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.datas.map((expense) => (
        <ExpenseItem
          // Sử dụng props key để cho react biết được là mình đang thêm mới vào
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}
