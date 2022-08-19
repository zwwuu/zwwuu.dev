import { useEffect, useMemo, useState } from 'react';
import { IconArrowBigDownLines } from '@tabler/icons';
import styles from './HeroSection.module.css';
import Container from '../UI/Container';
import Section from '../UI/Section';
import Stack from '../UI/Stack';

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

  return (
    <Section id={'hero'} className={styles.root}>
      <Container className={'mt-auto'}>
        <h1 className={styles.title}> Hello; </h1>
        <p>
          {'Welcome to my site, '}
          <span className={styles.name}>{words[index].substring(0, subIndex)}</span>
        </p>
      </Container>
      <Container className={'mt-auto'}>
        <Stack align={'items-center'}>
          <div className={styles.hint}>
            <span>s</span>
            <span>c</span>
            <span>r</span>
            <span>o</span>
            <span>o</span>
            <span>l</span>
            <span>l</span>
          </div>
          <a href={'#about'} className={styles.icon}>
            <IconArrowBigDownLines />
          </a>
        </Stack>
      </Container>
    </Section>
  );
}
