import styles from './SkillBoxes.module.css';
import skills from '../../data/skills';

export default function SkillBoxes() {
  return (
    <div className={styles.root}>
      {skills.map((skill) => {
        return (
          <div key={skill.name} className={styles.box}>
            {skill.icon}
            <div className={styles.title}>{skill.name}</div>
          </div>
        );
      })}
    </div>
  );
}
