import styles from './ProjectSection.module.css';
import Container from '../UI/Container';
import Section from '../UI/Section';
import Stack from '../UI/Stack';
import Card from '../UI/Card';
import projects from '../../data/projects';
import Tag from '../UI/Tag';
import Group from '../UI/Group';

export default function ProjectSection() {
  return (
    <Section id={'project'} className={styles.root}>
      <Container>
        <Stack>
          <h2 className={styles.title}>Projects</h2>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <Card
                key={project.title}
                header={
                  <>
                    <div className={styles.icon}>{project.icon}</div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectSubtitle}>{project.type}</p>
                  </>
                }
                body={
                  <Stack>
                    <p>{project.description}</p>
                    {project.tags && (
                      <Group wrap>
                        {project.tags.map((tag) => (
                          <Tag key={tag.name} icon={tag.icon} text={tag.name} />
                        ))}
                      </Group>
                    )}
                  </Stack>
                }
                footer={
                  <Group gap={'gap-0'} justify={'justify-around'}>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Preview
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Source
                      </a>
                    )}
                  </Group>
                }
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
