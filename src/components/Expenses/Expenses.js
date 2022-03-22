import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
	const [filteredYear, setFilteredYear] = useState("2022");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	// Filtering the expenses based on the selected year in dropdown menu
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selectd={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{/* {props.items.map((expense) => (
					<ExpenseItem
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/> */}
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
}

export default Expenses;
