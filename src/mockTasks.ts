import { v4 as uuidv4 } from 'uuid'

export const mockedTasks = [
  {
    id: uuidv4(),
    description: 'Develop reusable components.',
    isCompleted: true,
    createdAt: new Date('2024-02-10T03:10:00.000Z'),
  },
  {
    id: uuidv4(),
    description:
      'Use front-end frameworks (e.g., React, Vue, Angular) as needed',
    isCompleted: true,
    createdAt: new Date('2024-02-10T03:10:02.000Z'),
  },
  {
    id: uuidv4(),
    description:
      'Write unit tests for components and functionalities. Conduct integration tests.',
    isCompleted: false,
    createdAt: new Date('2024-02-21T03:00:00.000Z'),
  },
  {
    id: uuidv4(),
    description: 'Adjust styles to ensure fidelity to the design.',
    isCompleted: true,
    createdAt: new Date('2024-02-22T03:10:00.000Z'),
  },
  {
    id: uuidv4(),
    description: 'Integrate designs provided by designers.',
    isCompleted: true,
    createdAt: new Date('2024-02-23T03:00:00.000Z'),
  },
  {
    id: uuidv4(),
    description:
      'Optimize application performance (fast loading, reduce HTTP requests, etc.).',
    isCompleted: true,
    createdAt: new Date('2024-02-23T03:12:00.000Z'),
  },
  {
    id: uuidv4(),
    description:
      'Configure CI/CD pipelines for automated testing and deployment. Ensure that new changes are automatically tested and deployed.',
    isCompleted: false,
    createdAt: new Date('2024-02-23T03:14:10.000Z'),
  },
  {
    id: uuidv4(),
    description: 'Document source code, architecture and for end-users.',
    isCompleted: false,
    createdAt: new Date('2024-02-24T03:14:00.000Z'),
  },
]
