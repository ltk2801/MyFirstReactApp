import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const fillteredExpenses = props.datas.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={fillteredExpenses} />
        <ExpensesList datas={fillteredExpenses} />

        {/* hiện thị tất cả */}
        {/* {props.datas?.map((expense) => (
          <ExpenseItem
            // Sử dụng props key để cho react biết được là mình đang thêm mới vào
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))} */}
        {/* Hiện thị thẻ có nội dung thỏa điều kiện bằng && */}
        {/* {fillteredExpenses.length === 0 && <p>No Expenses found. </p>}
        {fillteredExpenses.length > 0 &&
          fillteredExpenses.map((expense) => (
            <ExpenseItem
              // Sử dụng props key để cho react biết được là mình đang thêm mới vào
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          ))} */}
        {/* {fillteredExpenses.map((expense) => (
          <ExpenseItem
            // Sử dụng props key để cho react biết được là mình đang thêm mới vào
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))} */}
        {/* <ExpenseItem
          title={props.datas[0].title}
          date={props.datas[0].date}
          amount={props.datas[0].amount}
        />
        <ExpenseItem
          title={props.datas[1].title}
          date={props.datas[1].date}
          amount={props.datas[1].amount}
        />
        <ExpenseItem
          title={props.datas[2].title}
          date={props.datas[2].date}
          amount={props.datas[2].amount}
        />
        <ExpenseItem
          title={props.datas[3].title}
          date={props.datas[3].date}
          amount={props.datas[3].amount}
        /> */}
      </Card>
    </div>
  );
}
