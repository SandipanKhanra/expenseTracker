import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
	/* This is hard coded */
	/* <ExpenseItem
				title={props.items[1].title}
				amount={props.items[1].amount}
				date={props.items[1].date}
			/>
			<ExpenseItem
				title={props.items[2].title}
				amount={props.items[2].amount}
				date={props.items[2].date}
			></ExpenseItem>
			<ExpenseItem
				title={props.items[3].title}
				amount={props.items[3].amount}
				date={props.items[3].date}
			></ExpenseItem> */
	/* If we give React an Array of objects then it can render them
			{[Object1, Object2, Object3]} */
	/** Here we listing expense items dynamically Using built-in Array.map()
			function we are transforming each expense object in the props.item Array
			into an ExpenseItem object */
	return (
		<Card className="expenses">
			{props.items.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	);
}

export default Expenses;
