import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div class="p-5">
      <h2 className="text-xl font-bold py-4 ml-2">Let's get started!</h2>
      <ExpenseItem data={expenses[0]} />
      <ExpenseItem data={expenses[1]} />
      <ExpenseItem data={expenses[2]} />
      <ExpenseItem data={expenses[3]} />
    </div>
  );
}

export default App;
