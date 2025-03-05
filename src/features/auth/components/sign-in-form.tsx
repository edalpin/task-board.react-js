import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export type SigInFormProps = {
  onSubmit: (values: SigInFormFields) => void;
  isLoading: boolean;
};

export type SigInFormFields = z.infer<typeof SigInFormSchema>;
const SigInFormSchema = z.object({
  email: z.string().email('This is not a valid email.'),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export const SigInForm = (props: SigInFormProps) => {
  const { onSubmit, isLoading } = props;

  const form = useForm<SigInFormFields>({
    resolver: zodResolver(SigInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in ...' : 'Login'}
        </Button>
      </form>
    </Form>
  );
};
