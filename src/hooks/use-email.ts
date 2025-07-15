import { EmailTemplateSchema } from '@/components/email-template';
import { useCallback, useState } from 'react';
import { z } from 'zod';

export function useEmail() {
  const [emailSuccessStatus, setEmailSuccessStatus] = useState<boolean | null>(null);
  const [isEmailInflight, setIsEmailInFlight] = useState<boolean>(false);

  const handleSubmit = useCallback(async (data: z.infer<typeof EmailTemplateSchema>) => {
    try {
      setEmailSuccessStatus(null);
      setIsEmailInFlight(true);
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setIsEmailInFlight(false);

      if (response.status !== 200) {
        setEmailSuccessStatus(false);
      } else {
        setEmailSuccessStatus(true);
      }
    } catch (error) {
      setEmailSuccessStatus(false);
      setIsEmailInFlight(false);
    }
  }, []);

  return { emailSuccessStatus, isEmailInflight, handleSubmit };
}
