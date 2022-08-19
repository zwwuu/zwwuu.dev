import Container from '../UI/Container';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.root}>
      <Container padding={'px-6 py-4'}>
        <p className={styles.title}>{`zwwuu © ${new Date().getFullYear()}`}</p>
      </Container>
    </footer>
  );
}
