import { ComponentPropsWithoutRef } from 'react';

interface CardProps<T> extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  className?: string;
  props?: T;
}

const Card = ({ children, className }: CardProps<string>) => {
  return (
    <div className={`bg-white rounded-2xl p-3 ${className}`}>{children}</div>
  );
};
export default Card;
