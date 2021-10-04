import '../../index';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import { Button } from '@mui/material';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.data.title);

    return (
        <div className=" flex bg-body space-x-2 p-5 m-3 rounded-2xl items-center">
            <ExpenseDate date={props.data.date} />
            <div className="flex flex-auto justify-between items-center">
                <div className="font-bold text-white">{props.data.title}</div>
                <Card className="bg-blue-background p-2 border-white border text-white hover:bg-secondary hover:text-danger">
                    $ {props.data.amount}
                </Card>
            </div>
        </div>
    );
}

export default ExpenseItem;