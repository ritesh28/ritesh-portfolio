import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { BACKEND_SKILL_GROUP, DEVOPS_SKILL_GROUP, FRONTEND_SKILL_GROUP, MISC_SKILL_GROUP } from '@/models';

export function SkillsSection() {
  return (
    <>
      <h3 className='text-6xl leading-24 font-semibold flex items-center after:border-b-2 after:grow after:ml-6'>Skills</h3>
      <div className='flex flex-col gap-4 [&>div>*]:mr-4'>
        <div>
          {FRONTEND_SKILL_GROUP.map((skill) => (
            <Badge key={skill.name} className={cn('[&>svg]:size-5 text-md', skill.featured && 'bg-orange-700')}>
              {<skill.icon />} {skill.name}
            </Badge>
          ))}
        </div>
        <div>
          {BACKEND_SKILL_GROUP.map((skill) => (
            <Badge key={skill.name} className={cn('[&>svg]:size-5 text-md', skill.featured && 'bg-orange-700')}>
              {<skill.icon />} {skill.name}
            </Badge>
          ))}
        </div>
        <div>
          {DEVOPS_SKILL_GROUP.map((skill) => (
            <Badge key={skill.name} className={cn('[&>svg]:size-5 text-md', skill.featured && 'bg-orange-700')}>
              {<skill.icon />} {skill.name}
            </Badge>
          ))}
        </div>
        <div>
          {MISC_SKILL_GROUP.map((skill) => (
            <Badge key={skill.name} className={cn('[&>svg]:size-5 text-md', skill.featured && 'bg-orange-700')}>
              {<skill.icon />} {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}
