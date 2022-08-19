import styles from './Stack.module.css';
import cn from 'clsx';

export default function Stack({ children, spacing, align, className }) {
  const rootClass = cn(styles.root, spacing ?? 'space-y-4', align, className);

  return <div className={rootClass}>{children}</div>;
}
