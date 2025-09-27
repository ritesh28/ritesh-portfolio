import { AnimateSvgPath } from '@/components/animate-svg-path';
import { EmailTemplateSchema } from '@/components/email-template';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { AnimateButtonVariant } from '@/components/animate-button-variant';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEmail } from '@/hooks/use-email';
import { AlertCircleIcon, CheckCircle2Icon, Send } from 'lucide-react';
import Link from 'next/link';

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
        <span className='relative inline-block'>
          Contact <AnimateSvgPath className='left-0 w-full -bottom-6 lg:-bottom-10' />
        </span>
      </h3>
      <div className='max-w-5xl mx-auto relative'>
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
              <Alert className='text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400 border-0'>
                <AlertCircleIcon />
                <AlertTitle>Oops! That didn&apos;t go as planned.</AlertTitle>
                <AlertDescription className='text-inherit'>
                  <p>
                    Looks like the form had a moment. You can still reach me the old-fashioned (modern) way —{' '}
                    <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target='_blank' className='inline underline'>
                      connect with me on LinkedIn!
                    </a>
                  </p>
                </AlertDescription>
              </Alert>
            )}
            {emailSuccessStatus && (
              <Alert className='text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400 border-0'>
                <CheckCircle2Icon />
                <AlertTitle>Got it! I&apos;ll reply faster than a dev spotting a missing semicolon.</AlertTitle>
                <AlertDescription className='text-inherit'>
                  <p>
                    In the meantime, go ahead and explore{' '}
                    <Link href='/projects' scroll={false} className='inline underline'>
                      my side projects
                    </Link>{' '}
                    — they&apos;re cooler than my email response time.
                  </p>
                </AlertDescription>
              </Alert>
            )}
            <div className='lg:self-end cursor-pointer'>
              <AnimateButtonVariant>
                <Button type='submit' disabled={isEmailInflight}>
                  <Send />
                  {isEmailInflight ? 'Sending...' : 'Send'}
                </Button>
              </AnimateButtonVariant>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
