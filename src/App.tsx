import { TaskBoardRoutes } from '@/features/routes/routes';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <>
      <TaskBoardRoutes />;
      <Toaster />
    </>
  );
}

export default App;
