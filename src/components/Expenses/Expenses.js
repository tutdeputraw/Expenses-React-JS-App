import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(
        expense => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className="p-2 bg-background-card">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {/* {filteredExpenses.map(expense => <ExpenseItem key={expense.id} data={expense} />)} */}
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;