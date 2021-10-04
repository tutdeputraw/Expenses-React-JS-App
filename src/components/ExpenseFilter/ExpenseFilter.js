import Card from "../UI/Card";

const ExpenseFilter = (props) => {
    const filterChangeHandler = event => props.onChangeFilter(event.target.value);

    return (
        <div className="p-5 space-y-5">
            <div className="flex justify-between ">
                <div className="text-white">
                    Filter by year
                </div>
                <select className="rounded-lg p-1" onChange={filterChangeHandler} defaultValue={props.selected}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
            </div>
            <Card className="container h-20 bg-secondary" />
        </div>
    );
}

export default ExpenseFilter;