import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { cn } from '@/utils/tailwind';

type InputProps = ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        className={cn(
          'rounded-md border border-gray-300 p-2 transition-all hover:border-gray-400',
          className,
        )}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default Input;

Input.displayName = 'Input';
