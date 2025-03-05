import { ChevronLeft } from 'lucide-react';
import {
  SigUpForm,
  SigUpFormFields,
} from '@/features/auth/components/sign-up-form';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '@/features/auth/hooks/use-signup.mutation';

export const SignUp = () => {
  const navigate = useNavigate();
  const signUpMutation = useSignUp();

  const onSignUp = (values: SigUpFormFields) => {
    signUpMutation.mutate(values);
  };

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <main className="flex flex-col justify-center items-center gap-2 w-full h-screen bg-conic-180 from-indigo-600 via-indigo-300 to-indigo-600">
      <section className="flex flex-col gap-10 w-1/3 h-auto rounded-md bg-white p-20">
        {/* Header */}
        <section className="relative">
          <ChevronLeft
            onClick={onGoBack}
            className="absolute top-1/2 -translate-y-1/2 ml-1 h-6 w-6 cursor-pointer"
          />
          <h1 className="font-bold text-2xl text-center">Create Account</h1>
        </section>

        {/* Form */}
        <SigUpForm onSubmit={onSignUp} />
      </section>
    </main>
  );
};
