import '../index.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    return (
        <div className=" flex bg-gray-300 space-x-2 p-2 m-2 rounded-md items-center">
            <ExpenseDate date={props.data.date} />
            <div className="flex flex-auto justify-between items-center">
                <div className="font-bold">{props.data.title}</div>
                <div className="rounded-lg bg-blue-300 p-2 hover:bg-yellow-300">
                    {props.data.amount}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;