import { Chip } from '@mui/material';
import { Progress, Task } from '../../types/Task';
import './Board-column.scss';

interface BoardColumnProps {
  readonly type: Progress;
  readonly tasks: Task[];
  readonly renderContent: (task: Task) => JSX.Element;
}

export const BoardColumn = (props: BoardColumnProps) => {
  const { type, tasks, renderContent } = props;

  return (
    <section
      className={`
        board-column
        ${type === 'To-do' && 'board-column--to-do'}
        ${type === 'Completed' && 'board-column--completed'}
      `}
    >
      <header className="board-column__header">
        <span className="board-column__header-title">{type}</span>
        <Chip label={tasks.length} size="small" />
      </header>
      <section className="board-column__content">
        {tasks.map((task) => (
          <section key={task.taskId}>{renderContent(task)}</section>
        ))}
      </section>
    </section>
  );
};
