import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  // Prop onSaveExpenseData là 1 hàm
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // ... là copy từ thằng enteredExpenseData, tạo thêm 1 thằng id trong đối tượng này
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    // onSaveExpenseData = {saveExpenseDataHandler} Chỉ trỏ vào hàm để bản thân hàm là một con trỏ được truyền sang ExpenseForm
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
