import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons';
import Section from '../UI/Section';
import Container from '../UI/Container';
import Stack from '../UI/Stack';
import styles from './ContactSection.module.css';
import Group from '../UI/Group';
import ContactForm from '../ContactForm';

export default function ContactSection() {
  return (
    <Section id={'contact'} className={styles.root}>
      <Container>
        <Stack>
          <h2 className={styles.title}>Get in touch</h2>
          <div className={styles.contactGrid}>
            <div className={styles.left}>
              <ContactForm />
            </div>
            <div className={styles.right}>
              <Group wrap gap={'gap-8'}>
                <a
                  className={styles.link}
                  href="https://github.com/zwwuu"
                  target="_blank"
                  rel="noreferrer noopener"
                  title={'Github'}
                >
                  <IconBrandGithub size={42} />
                </a>
                <a
                  className={styles.link}
                  href="mailto:zwwuu@protonmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  title={'Email'}
                >
                  <IconMail size={42} />
                </a>
                <a
                  className={styles.link}
                  href="https:// www.linkedin.com/in/zhaowei-w-287183245"
                  target="_blank"
                  rel="noreferrer noopener"
                  title={'LinkedIn'}
                >
                  <IconBrandLinkedin size={42} />
                </a>
              </Group>
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
