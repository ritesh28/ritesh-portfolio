import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { EXPERIENCE } from '@/models';
import Image from 'next/image';

export function ExperienceSection() {
  return (
    <>
      <h3 className='text-6xl leading-24 font-semibold flex items-center after:border-b-2 after:grow after:ml-6'>Experience</h3>
      <div className='relative'>
        {/* middle separator. todo: left side for small screen */}
        <Separator orientation='vertical' className='bg-muted absolute left-1/2' />
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className={cn('relative flex', index % 2 == 1 && 'justify-end')}>
            <div className='absolute left-1/2 -translate-1/2 top-1/2 w-12 h-12 rounded-full overflow-hidden'>
              <Image src={exp.company_logo} alt={exp.company_name} />
            </div>
            <div className={cn('w-2/5', index % 2 == 1 ? 'mr-14' : 'ml-14')}>
              <Card>
                <CardHeader>
                  <CardTitle>{exp.company_name}</CardTitle>
                  <CardDescription>{exp.designation}</CardDescription>
                  <CardAction>{exp.duration}</CardAction>
                </CardHeader>
                <CardContent>
                  <p>{exp.workDescription}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
