import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {


    if (props.items.length === 0) {
        return (
            <div className="text-white bg-blue-background rounded-lg mx-auto w-32 p-2 mb-2 text-center">
                no data found
            </div>
        );
    }

    return (
        <div>
            {props.items.map(expense =>
                <ExpenseItem key={expense.id} data={expense} />
            )}
        </div>
    );
}

export default ExpenseList;