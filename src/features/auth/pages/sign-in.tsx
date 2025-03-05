import { AlertCircle, ChevronRight } from 'lucide-react';
import { SigInForm, SigInFormFields } from '../components/sign-in-form';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from '../hooks/use-signin.mutation';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export const SignIn = () => {
  const navigate = useNavigate();
  const signInMutation = useSignIn();

  const onSignIn = (values: SigInFormFields) => {
    signInMutation.mutate(values);
  };

  const onSignUp = () => {
    navigate('/signup');
  };

  return (
    <main className="flex flex-col justify-center items-center gap-2 w-full h-screen bg-conic-180 from-indigo-600 via-indigo-300 to-indigo-600">
      <section className="flex flex-col gap-10 w-1/3 h-auto rounded-md bg-white p-20">
        {/* Header */}
        <h1 className="font-bold text-2xl text-center">Welcome Back!</h1>

        {/* Error */}
        {signInMutation.isError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{signInMutation.error.message}</AlertDescription>
          </Alert>
        )}

        {/* Form */}
        <SigInForm onSubmit={onSignIn} isLoading={signInMutation.isPending} />

        {/* Sign up */}
        <section className="flex justify-center">
          <span className="mr-2 text-gray-500">Don't have an account yet?</span>
          <span
            className="flex items-center text-blue-500 font-medium cursor-pointer"
            onClick={onSignUp}
          >
            Sign up <ChevronRight className="ml-1 h-4 w-4" />
          </span>
        </section>
      </section>
    </main>
  );
};
