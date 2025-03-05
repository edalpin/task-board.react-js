import { signIn } from '@/features/auth/api/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AccessToken, SignIn } from '@/features/auth/types/auth';
import { toast } from 'sonner';

export function useSignIn() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (signInObject: SignIn) => signIn(signInObject),
    onSettled: (accessToken: AccessToken | undefined) => {
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken.accessToken);
        toast.success('Logged in successfully!');
        navigate('/board');
      }
    },
  });
}
