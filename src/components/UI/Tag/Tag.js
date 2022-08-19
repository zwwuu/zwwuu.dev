import styles from './Tag.module.css';
import cn from 'clsx';

export default function Tag({ icon, text, className }) {
  const rootClass = cn(styles.root, className);

  return (
    <span className={rootClass}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </span>
  );
}
