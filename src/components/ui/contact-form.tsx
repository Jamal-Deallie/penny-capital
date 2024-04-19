'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components';

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  email: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  phoneNumber: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

const ContactForm = () => {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
    JSON.stringify(data, null, 2);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full md:pt-16'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-secondary-foreground text-base'>
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    autoComplete='one-time-code'
                    className='w-full'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-secondary-foreground text-base mt-4 block'>
                  Email
                </FormLabel>
                <FormControl>
                  <Input {...field} type='email' autoComplete='one-time-code' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-secondary-foreground text-base mt-4 block'>
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input {...field} type='text' autoComplete='one-time-code' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            size='xl'
            className='lg:px-3 lg:h-10 text-primary-foreground lg:text-lg text-base rounded-md text-center flex justify-center items-center box-border w-full mt-8 bg-accent border-[1.75px] border-accent font-heading transition-colors hover:bg-secondary hover:text-accent duration-300'
            variant='primary'
            font='body'
            fontSize='xl'>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
