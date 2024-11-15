'use client';
import dynamic from 'next/dynamic';
import { Pie, Cell, ResponsiveContainer } from 'recharts';
import SectionHeader from './SectionHeader';

const PieChart = dynamic(
  () => import('recharts').then((recharts) => recharts.PieChart),
  {
    ssr: false,
  }
);

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#28362B', '#415845', '#7BA682', '#e3ebe6'];

const Budgets = () => {
  return (
    <div className="h-full flex flex-col gap-5">
      <SectionHeader title="Budgets" href="/budgets" />

      <div className="grid h-96 md:h-full grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr_20%]">
        <ResponsiveContainer className="flex">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              blendStroke={true}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 md:grid-cols-1 justify-evenly [&_h3]:text-xs [&_h3]:text-gray-500 [&_span]:text-sm [&_span]:font-bold">
          <div>
            <h3>Entertainment</h3>
            <span>$50.00</span>
          </div>
          <div>
            <h3>Bills</h3>
            <span>$755.00</span>
          </div>
          <div>
            <h3>Dining Out</h3>
            <span>$75.00</span>
          </div>
          <div>
            <h3>Personal Care</h3>
            <span>$100.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Budgets;
