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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { MutationStatus } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useToast } from '@/hooks/custom/toast';

export type SigUpDialogProps = {
  open: boolean;
  status: MutationStatus;
  error?: string;
  onOpenChange: () => void;
  onSubmit: (values: SigUpFormFields) => void;
};

export type SigUpFormFields = z.infer<typeof SigUpFormSchema>;
const SigUpFormSchema = z.object({
  email: z.string().email('This is not a valid email.'),
  name: z.string().min(1, { message: 'Name is required.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export const SigUpDialog = (props: SigUpDialogProps) => {
  const { open, status, error, onOpenChange, onSubmit } = props;
  const { toast } = useToast();

  useEffect(() => {
    if (status === 'success') {
      form.reset();
      toast({
        title: 'Account created successfully!!',
        description: 'Please log in.',
      });
      onOpenChange();
    }
  }, [status]);

  const form = useForm<SigUpFormFields>({
    resolver: zodResolver(SigUpFormSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  return (
    <Dialog onOpenChange={onOpenChange} open={open} defaultOpen={false}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-center">Sign Up</DialogTitle>
        </DialogHeader>
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
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
            <DialogFooter>
              <Button
                variant={'secondary'}
                disabled={form.formState.isSubmitting}
                onClick={onOpenChange}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
