import styles from './Overlay.module.css';
import cn from 'clsx';

export default function Overlay({ children, className }) {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.overlay}></div>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
