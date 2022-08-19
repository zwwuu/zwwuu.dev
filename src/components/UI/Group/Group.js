import styles from './Group.module.css';
import cn from 'clsx';

export default function Group({ children, wrap, justify, gap, className }) {
  const rootClass = cn(styles.root, wrap ? 'flex-wrap' : 'flex-nowrap', justify, gap ?? 'gap-y-2 gap-x-4', className);

  return <div className={rootClass}>{children}</div>;
}
