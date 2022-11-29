import styles from './Card.module.css';
import cn from 'clsx';
import { motion } from 'framer-motion';

export default function Card({ header, body, footer, className }) {
  return (
    <motion.div whileTap={{ y: -10 }} whileHover={{ y: -10 }} className={cn(styles.root, className)}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{body}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </motion.div>
  );
}
