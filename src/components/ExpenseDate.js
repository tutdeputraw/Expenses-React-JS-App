import '../index.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="container w-20 p-1 border-blue-300 border content-center rounded-lg">
            <div className="flex flex-col items-center align-self: flex-center">
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
        </div>

    );
}

export default ExpenseDate;