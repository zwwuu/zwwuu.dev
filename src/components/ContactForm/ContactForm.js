import styles from './ContactForm.module.css';
import Stack from '../UI/Stack';
import { useState } from 'react';
import Overlay from '../UI/LoadingOverlay';
import { IconArrowNarrowLeft, IconCircleDotted } from '@tabler/icons';

export default function ContactForm() {
  const [formState, setFormState] = useState({ state: 'initial', message: '' });
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({ state: 'loading', message: '' });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(event.target)).toString(),
    })
      .then((response) => {
        if (!response.ok) {
          setFormState({ state: 'error', message: `Error ${response.status}` });
        } else {
          event.target.reset();
          setFormState({ state: 'done', message: '' });
        }
      })
      .catch((error) => {
        setFormState({ state: 'error', message: error });
      });
  };

  return (
    <div className={styles.root}>
      {formState.state === 'loading' && (
        <Overlay role="status">
          <Stack align={'items-center'}>
            <IconCircleDotted stroke={2} size={'32px'} className={styles.icon} />
            <p>Sending...</p>
          </Stack>
        </Overlay>
      )}
      {formState.state === 'done' && (
        <Overlay>
          <Stack align={'items-center'}>
            <p role="alert">Message received 👍</p>
            <button
              className={styles.backButton}
              type={'button'}
              onClick={() => {
                setFormState({ state: 'initial', message: '' });
              }}
            >
              <IconArrowNarrowLeft />
              Back
            </button>
          </Stack>
        </Overlay>
      )}
      <form name="contact" method="POST" data-netlify={'true'} netlify-honeypot="honeypot" onSubmit={handleSubmit}>
        <Stack>
          <div>
            <label className={styles.label} htmlFor={'name'}>
              Name
            </label>
            <input type="text" id="name" name="name" autoComplete="name" required className={styles.input} />
          </div>
          <div>
            <label className={styles.label} htmlFor={'email'}>
              Email
            </label>
            <input type="email" id="email" name="email" autoComplete="email" required className={styles.input} />
          </div>
          <div>
            <label className={styles.label} htmlFor={'message'}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              disabled={formState.state === 'loading'}
              required
              className={styles.input}
            />
          </div>
          <input type="hidden" name="form-name" value="contact" />
          <div className={'hidden'}>
            <label className={styles.label}>Don’t fill this out if you’re human</label>
            <input name="honeypot" />
          </div>
          {formState.state === 'error' && (
            <p role={'alert'} className={styles.error}>
              {formState.message}
            </p>
          )}
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </Stack>
      </form>
    </div>
  );
}
