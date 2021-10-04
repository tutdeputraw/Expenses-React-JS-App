import '../../index';
import Card from "../UI/Card";

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <Card className="container w-20 p-1 border-white bg-background-card border content-center">
            <div className="flex flex-col items-center align-self: flex-center text-white">
                <div className="font-semibold">{month}</div>
                <div>{day}</div>
                <div className="font-bold">{year}</div>
            </div>
        </Card>

    );
}

export default ExpenseDate;