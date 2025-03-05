import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from '@/features/auth/pages/sign-in';
import { SignUp } from '@/features/auth/pages/sign-up';
import { Board } from '@/features/tasks/pages/board';

export const TaskBoardRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  </BrowserRouter>
);
