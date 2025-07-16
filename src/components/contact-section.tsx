import { EmailTemplateSchema } from '@/components/email-template';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEmail } from '@/hooks/use-email';
import { AlertCircleIcon, CheckCircle2Icon, Send } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';

export function ContactSection() {
  const { emailSuccessStatus, isEmailInflight, handleSubmit } = useEmail();

  const form = useForm<z.infer<typeof EmailTemplateSchema>>({
    resolver: zodResolver(EmailTemplateSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  return (
    <>
      <h3 className='text-[clamp(2rem,1.4966rem+2.3973vw,3.75rem)] my-4 font-semibold flex items-center before:border-b-2 before:grow before:mr-5'>
        Contact
      </h3>
      <div className='max-w-5xl mx-auto'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='flex flex-col gap-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name <sup className='text-destructive -ml-1'>*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>
                    Email <sup className='text-destructive -ml-1'>*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Message <sup className='text-destructive -ml-1'>*</sup>
                  </FormLabel>
                  <FormControl>
                    <Textarea className='resize-y' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {emailSuccessStatus === false && (
              <Alert variant='destructive'>
                <AlertCircleIcon />
                <AlertTitle>Unable to send the message.</AlertTitle>
                <AlertDescription>
                  <div className='flex gap-2'>
                    Please connect with me on
                    <a href='#'>
                      <span className='flex gap-1 items-center underline text-foreground'>
                        <SiLinkedin /> LinkedIn.
                      </span>
                    </a>
                  </div>
                </AlertDescription>
              </Alert>
            )}
            {emailSuccessStatus && (
              <Alert>
                <CheckCircle2Icon />
                <AlertTitle>Thanks for your message!</AlertTitle>
                <AlertDescription>I&apos;ll reach out at the earliest. Please check out my side projects.</AlertDescription>
              </Alert>
            )}
            <Button type='submit' disabled={isEmailInflight} className='lg:self-end'>
              <Send />
              {isEmailInflight ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
