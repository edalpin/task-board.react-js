import { signIn, signUp } from '@/api/auth';
import { AccessToken, SignIn, SignUp } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export function useSignIn() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (signInObject: SignIn) => signIn(signInObject),
    onSettled: (accessToken: AccessToken | undefined) => {
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken.accessToken);
        navigate('/home');
      }
    },
  });
}

export function useSignUp() {
  return useMutation({
    mutationFn: (signUpObject: SignUp) => signUp(signUpObject),
  });
}
