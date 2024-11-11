import { useEffect, useState } from 'react';
import { tasksPromise } from '../api/tasks';
import { Task } from '../types/Task';
import { Card } from '../components/card/Card';

export const Board = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    tasksPromise.then((tasks) => setTasks(tasks));
  }, []);

  return (
    <>
      <div>
        {tasks.map((task) => {
          return (
            <Card
              task={task}
              onEdit={() => {}}
              onDelete={() => {}}
              onViewMore={() => {}}
            />
          );
        })}
      </div>
    </>
  );
};
