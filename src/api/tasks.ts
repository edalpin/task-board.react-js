import { mockedTasks } from '../mocks/tasks';
import { Task } from '../types/Task';

export const tasksPromise = new Promise<Task[]>((resolve) => {
  setTimeout(() => {
    resolve(mockedTasks);
  }, 1000);
});
