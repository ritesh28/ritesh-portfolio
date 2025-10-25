import { z } from 'zod';

export const EmailTemplateSchema = z.object({
  name: z.string().min(1, { error: 'Name is required' }),
  email: z.email({ error: (iss) => (iss.input === '' ? 'Email is required' : 'Email is invalid') }),
  message: z.string().min(2, { error: 'Please scribble down a message!' }),
});

export function EmailTemplate({ name, email, message }: z.infer<typeof EmailTemplateSchema>) {
  return (
    <div>
      <h1>
        You have a new message from <a href='https://ritesh-portfolio-gamma.vercel.app/'>https://ritesh-portfolio-gamma.vercel.app/</a>!
      </h1>
      <hr />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
      <hr />
    </div>
  );
}
