import Section from '../UI/Section';
import Container from '../UI/Container';
import styles from './AboutSection.module.css';
import Stack from '../UI/Stack';
import SkillBoxes from '../SkillBoxes';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function AboutSection() {
  const titles = ['Web Developer', 'Gamer', 'Software Engineer', 'New Yorker', 'Coder', 'Freelancer', 'Techie'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <Section id={'about'} className={styles.root}>
      <Container>
        <div className={styles.aboutGrid}>
          <div className={styles.left}>
            <Stack>
              <h2 className={styles.heading}>
                {"I'm A "}
                <AnimatePresence>
                  <>
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      className={styles.title}
                    >
                      <motion.span
                        className={styles.indicator}
                        animate={{ opacity: [1, 0.25, 1], scale: [1, 1.5, 1] }}
                        transition={{
                          repeat: Infinity,
                        }}
                      />
                      {titles[index]}.
                    </motion.span>
                  </>
                </AnimatePresence>
              </h2>
              <p className={styles.subtitle}>
                {'Hello, my name is '}
                <span className={styles.name}>zwwuu</span>. Nice to meet you.
              </p>
              <p>
                I love solving problems and creating easy-to-use applications for people. I also enjoy learning about
                all the technologies available to create new content for the internet.
              </p>
            </Stack>
          </div>
          <div className={styles.right}>
            <SkillBoxes />
          </div>
        </div>
      </Container>
    </Section>
  );
}
