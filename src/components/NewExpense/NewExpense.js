import NewExpenseForm from "./NewExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
    return (
        <Card className='border my-10 p-10'>
            <NewExpenseForm onNewExpense={props.onNewExpense}/>
        </Card>
    );
}

export default NewExpense;