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

export type SigUpFormProps = {
  onSubmit: (values: SigUpFormFields) => void;
};

export type SigUpFormFields = z.infer<typeof SigUpFormSchema>;
const SigUpFormSchema = z.object({
  email: z.string().email('This is not a valid email.'),
  name: z.string().min(1, { message: 'Name is required.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export const SigUpForm = (props: SigUpFormProps) => {
  const { onSubmit } = props;

  const form = useForm<SigUpFormFields>({
    resolver: zodResolver(SigUpFormSchema),
    defaultValues: {
      email: '',
      name: '',
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Name" {...field} />
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
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Sign Up
        </Button>
      </form>
    </Form>
  );
};
