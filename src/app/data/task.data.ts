import { Task } from "../models/task";

export const tasks_data: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Dis one is close to the end, so is urgent',
    completed: false,
    createdAt: new Date('2025-05-30')
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'This one is completed',
    completed: true,
    createdAt: new Date('2023-02-01')
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'This one is not urgent',
    completed: false,
    createdAt: new Date('2025-12-29')
  }
]
