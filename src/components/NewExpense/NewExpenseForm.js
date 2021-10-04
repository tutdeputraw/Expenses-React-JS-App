import { Button } from '@mui/material';
import { useState } from 'react';
import '../../index';

const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = event => setEnteredTitle(event.target.value);
    const amountChangeHandler = event => setEnteredAmount(event.target.value);
    const dateChangeHandler = event => setEnteredDate(event.target.value);

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onNewExpense(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="">
                <div className="flex space-x-5">
                    <div className="space-y-2">
                        <div>Title</div>
                        <input
                            className="rounded-xl p-2"
                            type="text"
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>
                    <div className="space-y-2">
                        <div>Amount</div>
                        <input
                            className="flex rounded-xl p-2"
                            type="number"
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                </div>
                <div className="mt-5 space-y-2">
                    <div>Date</div>
                    <input
                        className="rounded-xl p-2"
                        type="date"
                        min="2019-01-01"
                        value={enteredDate}
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div >
            <div className="flex rounded-xl flex-row-reverse">
                <Button
                    type="submit"
                    size="large"
                    variant="contained">
                    Create new Expense
                </Button>
            </div>

        </form >
    );
}

export default NewExpenseForm;