import Budgets from './Budgets';
import Pots from './Pots';
import Summary from './Summary';
import Card from './UI/Card';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8 px-10 py-8 lg:h-full lg:overflow-hidde font-[family-name:var(--font-public-sans)]">
      <h1 className="text-4xl font-bold">Overview</h1>

      <Summary />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 h-full grid-rows-[auto_1fr_1fr_1fr] min-h-0 [&>div]:p-6 [&>div]:bg-white">
        <Card>
          <Pots />
        </Card>
        <Card className="row-[span_2]">
          <Budgets />
        </Card>
        <Card className="row-[span_3]">
          <p>Transactions</p>
        </Card>
        <Card className="row-[span_2]">
          <p>Recurring Bills</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
