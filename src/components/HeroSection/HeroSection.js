import { useEffect, useMemo, useState } from 'react';
import styles from './HeroSection.module.css';
import Container from '../UI/Container';
import Section from '../UI/Section';
import Stack from '../UI/Stack';
import ScrollIndicator from '../ScrollIndicator';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const words = useMemo(
    () => [
      'stranger',
      'digital traveler',
      'web surfer',
      'netizen',
      'internet explorer',
      'cybernaut',
      'cyberspace voyager',
    ],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 300);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  const variants = {
    hidden: { y: '100%', opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <Section id={'hero'} className={styles.root}>
      <Container className={styles.container}>
        <Stack spacing={'space-y-8'}>
          <motion.h1
            className={styles.title}
            variants={variants}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true }}
          >
            Hello;
          </motion.h1>
          <motion.p variants={variants} initial={'hidden'} whileInView={'show'} viewport={{ once: true }}>
            {'Welcome to my site, '}
            <span className={styles.name}>{words[index].substring(0, subIndex)}</span>
          </motion.p>
        </Stack>
      </Container>
      <Container className={styles.container}>
        <ScrollIndicator />
      </Container>
    </Section>
  );
}
