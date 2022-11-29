import styles from './SkillBoxes.module.css';
import skills from '../../data/skills';
import { motion } from 'framer-motion';

export default function SkillBoxes() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };

  return (
    <motion.div
      className={styles.root}
      initial="hidden"
      whileInView={'show'}
      variants={container}
      viewport={{ once: true }}
    >
      {skills.map((skill) => {
        return (
          <motion.div key={skill.name} variants={item} className={styles.box}>
            {skill.icon}
            <div className={styles.title}>{skill.name}</div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
