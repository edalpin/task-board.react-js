import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from '@/pages/sign-in';
import { Home } from '@/pages/home';
import { ProtectedRoutes } from '@/components/custom/protected-routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
