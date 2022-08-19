import styles from './Container.module.css';
import cn from 'clsx';

export default function Container({ children, padding, className }) {
  const rootClass = cn(styles.root, padding ?? 'px-6 py-8', className);

  return <div className={cn(rootClass)}>{children}</div>;
}
