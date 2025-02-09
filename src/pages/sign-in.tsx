import { useState } from 'react';
import sigInImage from '@/assets/signin.svg';
import logoImage from '@/assets/logo.svg';
import { AlertCircle, ChevronRight } from 'lucide-react';
import { SigInForm, SigInFormFields } from '@/components/custom/sign-in-form';
import {
  SigUpDialog,
  SigUpFormFields,
} from '@/components/custom/sign-up-dialog';
import { useSignIn, useSignUp } from '@/hooks/mutations/auth';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export const SignIn = () => {
  const [isSignUpDialogOpen, setIsSignUpDialogOpen] = useState(false);
  const signInMutation = useSignIn();
  const signUpMutation = useSignUp();

  const onSignIn = (values: SigInFormFields) => {
    signInMutation.mutate(values);
  };

  const onSignUp = (values: SigUpFormFields) => {
    signUpMutation.mutate(values);
  };

  const onSignUpDialogOpenChange = () => {
    setIsSignUpDialogOpen((open) => !open);
  };

  return (
    <main className="flex flex-row h-screen">
      <img src={sigInImage} className="bg-blue-500 h-full w-4/6 object-cover" />
      <section className="flex flex-col items-center justify-center h-full w-2/6">
        <section className="flex items-center mb-20">
          <img src={logoImage} className="fill-blue-500 w-14 h-14 mr-1" />
          <span className="text-blue-500 text-4xl font-medium">
            Challenge Js
          </span>
        </section>
        <section className="w-4/5">
          {signInMutation.isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {signInMutation.error.message}
              </AlertDescription>
            </Alert>
          )}

          <SigInForm onSubmit={onSignIn} />

          <section className="flex justify-center mt-6">
            <span className="mr-2 text-gray-500">
              Don't have an account yet?
            </span>
            <span
              className="flex items-center text-blue-500 font-medium cursor-pointer"
              onClick={onSignUpDialogOpenChange}
            >
              Sign up <ChevronRight className="ml-1 h-4 w-4" />
            </span>

            <SigUpDialog
              open={isSignUpDialogOpen}
              status={signUpMutation.status}
              error={signUpMutation.error?.message}
              onSubmit={onSignUp}
              onOpenChange={onSignUpDialogOpenChange}
            />
          </section>
        </section>
      </section>
    </main>
  );
};
