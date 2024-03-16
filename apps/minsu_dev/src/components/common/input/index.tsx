import { ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './input.module.css';

type InputProps = ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return <input className={styles.input} ref={ref} {...rest} />;
  },
);

export default Input;

Input.displayName = 'Input';
