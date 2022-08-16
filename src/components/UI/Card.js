import React from "react";
import "./Card.css";

export default function Card(props) {
  // Thêm 1 biến để lưu class card và cho nó + thêm các class khác
  // props.children là 1 props đặc biệt, tên riêng là nội dung giữa 2 thẻ div đóng mở
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
