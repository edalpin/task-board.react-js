import { useEffect, useState } from 'react';
import { tasksPromise } from '../api/tasks';
import { Task } from '../types/Task';

export const Board = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    tasksPromise.then((tasks) => setTasks(tasks));
  }, []);

  return (
    <>
      <div>
        {tasks.map((task) => {
          return <div>{task.title}</div>;
        })}
      </div>
    </>
  );
};
