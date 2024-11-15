import Image from 'next/image';
import Card from './UI/Card';
import SectionHeader from './SectionHeader';

const Pots = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeader title="Pots" href="/pots" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <Card className="flex p-4 gap-4 bg-mint">
          <Image src="/icon-pot.svg" alt="pot icon" width={26} height={40} />
          <div className="flex flex-col">
            <span>Total Saved</span>
            <span className="text-32 font-bold">$850</span>
          </div>
        </Card>
        <div className="grid grid-cols-2 grid-rows-2 [&>div]:flex-col [&_span]:flex-col [&_h3]:text-xs [&_h3]:text-gray-500 [&_span]:text-sm [&_span]:font-bold">
          <div>
            <h3>Savings</h3>
            <span>$159</span>
          </div>
          <div>
            <h3>Gift</h3>
            <span>$40</span>
          </div>
          <div>
            <h3>Concert Ticket</h3>
            <span>$110</span>
          </div>
          <div>
            <h3>New Laptop</h3>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pots;
