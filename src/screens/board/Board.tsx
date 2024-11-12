import './Board.scss';
import { useEffect, useState } from 'react';
import { tasksPromise } from '../../api/tasks';
import { Task } from '../../types/Task';
import { Card } from '../../components/card/Card';
import { BoardColumn } from '../../components/board-column/Board-column';

export const Board = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    tasksPromise.then((tasks) => setTasks(tasks));
  }, []);

  return (
    <section className="board">
      <BoardColumn
        type="To-do"
        tasks={tasks}
        renderContent={(task) => (
          <Card
            task={task}
            onEdit={(taskId) => console.log(taskId, 'edit')}
            onDelete={() => {}}
            onViewMore={() => {}}
          />
        )}
      />
      <BoardColumn
        type="Completed"
        tasks={tasks}
        renderContent={(task) => (
          <Card
            task={task}
            onEdit={(taskId) => console.log(taskId, 'edit')}
            onDelete={() => {}}
            onViewMore={() => {}}
          />
        )}
      />
    </section>
  );
};
