import { useAuth } from '@/features/routes/hooks/use-auth';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to={'/signin'} replace />;
  return <Outlet />;
};
