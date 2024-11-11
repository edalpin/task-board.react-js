import { Button, Chip } from '@mui/material';
import { Priority, Task } from '../../types/Task';
import './Card.scss';
import {
  ArrowDownwardOutlined,
  ArrowForwardIos,
  ArrowForwardOutlined,
  ArrowUpwardOutlined,
  DeleteOutline,
  EditOutlined,
} from '@mui/icons-material';
import { assertNever } from '../../helpers/assertNever';

interface CardProps {
  task: Task;
  onEdit: React.MouseEventHandler<HTMLButtonElement>;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
  onViewMore: React.MouseEventHandler<HTMLButtonElement>;
}

export const Card = (props: CardProps) => {
  const { task, onEdit, onDelete, onViewMore } = props;

  const formatTimestampToDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const getPriorityButton = (priority: Priority) => {
    switch (priority) {
      case 'High':
        return <ArrowUpwardOutlined />;
      case 'Medium':
        return <ArrowForwardOutlined />;
      case 'Low':
        return <ArrowDownwardOutlined />;
      default:
        assertNever(priority);
    }
  };

  const getPriorityColor = (priority: Priority) => {
    switch (priority) {
      case 'High':
        return 'error';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'info';
      default:
        assertNever(priority);
    }
  };

  return (
    <section className="card">
      <header className="card__sub-header">
        <span className="card__sub-header-value">
          {formatTimestampToDate(task.dueDate)}
        </span>
        <section className="card__sub-header-actions">
          <Button style={{ minWidth: '30px' }} size="small" onClick={onDelete}>
            <DeleteOutline />
          </Button>
          <Button style={{ minWidth: '30px' }} size="small" onClick={onEdit}>
            <EditOutlined />
          </Button>
        </section>
      </header>

      <section>
        <header className="card__header">
          <span className="card__header-value">{task.title}</span>
          <Chip
            label={task.priority}
            variant="outlined"
            color={getPriorityColor(task.priority)}
            deleteIcon={getPriorityButton(task.priority)}
            onDelete={() => {}}
          />
        </header>
        <section className="card__content">{task.description}</section>
      </section>

      <footer className="card__footer">
        <Button size="small" endIcon={<ArrowForwardIos />} onClick={onViewMore}>
          View more
        </Button>
      </footer>
    </section>
  );
};
