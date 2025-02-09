import { useAuth } from '@/hooks/custom/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = (): JSX.Element => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to={'/signin'} replace />;
  return <Outlet />;
};
