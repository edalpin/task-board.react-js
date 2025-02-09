export const useAuth = () => {
  const isAuthenticated = localStorage.getItem('accessToken') !== null;
  return { isAuthenticated };
};
