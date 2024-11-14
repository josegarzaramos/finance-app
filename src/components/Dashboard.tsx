const Dashboard = () => {
  return (
    <div className="flex flex-col px-10 py-8 lg:h-full lg:overflow-hidde">
      <h1 className="text-4xl">Overview</h1>

      <div className="flex">
        <p>Current Balance</p>
        <p>Income</p>
        <p>Expenses</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full [&_div]:bg-white [&_p]:p-3 grid-rows-4 min-h-0 [&_div]:rounded-2xl">
        <div>
          <p>Pots</p>
        </div>
        <div className="row-[span_2]">
          <p>Budgets</p>
        </div>
        <div className="row-[span_3]">
          <p>Transactions</p>
        </div>
        <div className="row-[span_2]">
          <p>Recurring Bills</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
