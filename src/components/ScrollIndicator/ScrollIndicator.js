import styles from './ScrollIndicator.module.css';
import Stack from '../UI/Stack';
import { motion } from 'framer-motion';
import { IconArrowBigDownLines } from '@tabler/icons';

export default function ScrollIndicator() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: '-100%', scale: 2, rotate: 360, opacity: 0 },
    show: { y: 0, scale: 1, rotate: 0, opacity: 1 },
    hover: { y: -5, rotate: -360 },
  };

  return (
    <Stack align={'items-center'}>
      <motion.div
        className={styles.text}
        variants={container}
        whileInView={'show'}
        initial="hidden"
        whileHover={'hover'}
        viewport={{ once: true }}
      >
        <motion.span variants={item}>s</motion.span>
        <motion.span variants={item}>c</motion.span>
        <motion.span variants={item}>r</motion.span>
        <motion.span variants={item}>o</motion.span>
        <motion.span variants={item}>o</motion.span>
        <motion.span variants={item}>l</motion.span>
        <motion.span variants={item}>l</motion.span>
      </motion.div>
      <motion.a href={'#about'} animate={{ y: [-5, 0, -5] }} transition={{ repeat: Infinity }}>
        <IconArrowBigDownLines />
      </motion.a>
    </Stack>
  );
}
