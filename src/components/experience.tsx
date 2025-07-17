import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { EXPERIENCES } from '@/models';
import Image from 'next/image';

export function ExperienceSection() {
  return (
    <>
      <h3 className='text-[clamp(2rem,1.4966rem+2.3973vw,3.75rem)] my-4 font-semibold flex items-center after:border-b-2 after:grow after:ml-5'>
        Experience
      </h3>
      <div className='relative'>
        <Separator orientation='vertical' className='bg-muted absolute left-0 lg:left-1/2 hidden lg:block' />
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className={cn('relative flex mb-4', index % 2 == 1 && 'lg:justify-end')}>
            <div className='absolute left-0 lg:left-1/2 -translate-1/2 top-1/2 w-12 h-12 rounded-full overflow-hidden hidden lg:block'>
              <Image src={exp.company_logo} alt={exp.company_name} />
            </div>
            <div className={cn('w-full lg:w-2/5 lg:ml-14', index % 2 == 1 && 'lg:mr-14')}>
              <Card>
                <CardHeader className='grid has-data-[slot=card-action]:grid-cols-1 md:has-data-[slot=card-action]:grid-cols-[1fr_auto]'>
                  <CardTitle>{exp.company_name}</CardTitle>
                  <CardDescription>{exp.designation}</CardDescription>
                  <CardAction className='col-start-1 md:col-start-2 row-start-3 md:row-start-1'>{exp.duration}</CardAction>
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
