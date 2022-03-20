import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);
	const clickHandler = () => {
		setTitle("Updated!!!");
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
				{/**We just point to the function but do not call it. Because if we call
				it like clickHandler() then it will be executed when JSX code is parsed
				which is too early, rather React will call it when the particular event occurs*/}
				<button onClick={clickHandler}>Click Here</button>
			</div>
		</Card>
	);
}

export default ExpenseItem;
