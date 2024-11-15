import Link from 'next/link';
import Image from 'next/image';
import CaretRight from '/public/icon-caret-right.svg';

interface SectionProps {
  title: string;
  href: string;
}

const SectionHeader = ({ title, href }: SectionProps) => {
  return (
    <div className="flex justify-between">
      <h2 className="text-xl text-gray-900 font-bold">{title}</h2>
      <Link href={href} className="flex gap-5">
        <span className="text-gray-500">See Details</span>
        <Image src={CaretRight} alt="caret icon" />
      </Link>
    </div>
  );
};
export default SectionHeader;
