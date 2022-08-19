import styles from './Section.module.css';
import cn from 'clsx';

export default function Section({ id, children, className }) {
  const rootClass = cn(styles.root, className);

  return (
    <div id={id} className={rootClass}>
      {children}
    </div>
  );
}
