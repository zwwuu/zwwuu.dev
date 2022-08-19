import styles from './Card.module.css';
import cn from 'clsx';

export default function Card({ header, body, footer, className }) {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{body}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}
