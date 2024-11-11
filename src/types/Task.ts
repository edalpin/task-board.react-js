// Options
export type Progress = 'To-do' | 'Completed';
export type Priority = 'High' | 'Medium' | 'Low';

export interface Task {
  taskId: string;
  title: string;
  description: string;
  progress: Progress;
  priority: Priority;
  startDate: number;
  dueDate: number;
}
