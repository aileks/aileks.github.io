import PageLayout from '@/layouts/PageLayout';

interface Project {
  id: number;
  title: string;
  description: string;
}

// Placeholder data
const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is a description for Project 1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is a description for Project 2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is a description for Project 3',
  },
];

export default function Projects() {
  return (
    <PageLayout>
      <main className="flex flex-col justify-center items-center">
        <h1>Projects</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <a href={`/projects/${project.id}`}>{project.title}</a>
            </li>
          ))}
        </ul>
      </main>
    </PageLayout>
  );
}
