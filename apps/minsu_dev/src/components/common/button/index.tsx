import { ComponentPropsWithoutRef, FC } from 'react';
import styles from './button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'>;
const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};
export default Button;
