import Card from './UI/Card';

const Summary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 [&_div]:p-6 [&_div]:flex [&_div]:flex-col [&_div]:gap-3 [&_span]:text-32 [&_span]:font-bold">
      <Card className="bg-evergreen text-white">
        <h2>Current Balance</h2>
        <span className="text-32">$4,836.00</span>
      </Card>
      <Card className="bg-white">
        <h2>Income</h2>
        <span>$3,184.25</span>
      </Card>
      <Card className="bg-white">
        <h2>Expenses</h2>
        <span>$1,700.50</span>
      </Card>
    </div>
  );
};
export default Summary;
