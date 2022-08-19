import { useEffect, useState } from 'react';
import Section from '../UI/Section';
import Container from '../UI/Container';
import styles from './AboutSection.module.css';
import Stack from '../UI/Stack';
import SkillBoxes from '../SkillHive';

export default function AboutSection() {
  const titles = [
    'Web Developer',
    'Gamer',
    'Software Engineer',
    'New Yorker',
    'Coder',
    'Crypto Enthusiast',
    'Freelancer',
    'Techie',
    'Geek',
  ];
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
              <h2 className={styles.title}>
                {"I'm A "}
                <span
                  key={index}
                  className={styles.indicator}
                  onClick={() => {
                    setIndex((prev) => (prev + 1) % titles.length);
                  }}
                >
                  {titles[index]}.
                </span>
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
