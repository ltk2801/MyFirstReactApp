import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const handlerClick = (e) => {
  //   setTitle("Updated !");
  // };
  return (
    // Thể card là thẻ mình tự đặt ra giống như có 2 cái css chung
    <li>
      <Card className="expense-item ">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
        {/* <button onClick={handlerClick}>Changed </button> */}
      </Card>
    </li>
  );
}
