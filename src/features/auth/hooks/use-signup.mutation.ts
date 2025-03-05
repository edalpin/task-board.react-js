import { signUp } from '@/features/auth/api/auth';
import { useMutation } from '@tanstack/react-query';
import { SignUp } from '@/features/auth/types/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function useSignUp() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (signUpObject: SignUp) => signUp(signUpObject),
    onSettled: () => {
      toast.success('Account created successfully!');
      navigate('/signin');
    },
  });
}
