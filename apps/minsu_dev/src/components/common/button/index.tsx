import { ComponentPropsWithoutRef, FC } from 'react';
import { cn } from '@/utils/tailwind';

type ButtonProps = ComponentPropsWithoutRef<'button'>;
const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={cn(
        'w-full rounded-md transition-all bg-white py-2 text-gray-800 hover:bg-white-700',
        className,
      )}
    >
      {children}
    </button>
  );
};
export default Button;
