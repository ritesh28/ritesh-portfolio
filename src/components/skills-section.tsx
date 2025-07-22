import { AnimateSvgPath } from '@/components/animate-svg-path';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { BACKEND_SKILL_GROUP, DEVOPS_SKILL_GROUP, FRONTEND_SKILL_GROUP, MISC_SKILL_GROUP } from '@/models';
import { motion, Variants } from 'framer-motion';
import { useCallback } from 'react';

export const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  final: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
} satisfies Variants;

const skillGroups = [FRONTEND_SKILL_GROUP, BACKEND_SKILL_GROUP, DEVOPS_SKILL_GROUP, MISC_SKILL_GROUP];

export function SkillsSection() {
  const calculateCustom = useCallback((skillGroupIndex: number, skillIndex: number) => {
    let val = 0;
    for (let index = 0; index < skillGroupIndex; index++) {
      val += skillGroups[index].length;
    }
    val += skillIndex;
    return val;
  }, []);

  return (
    <>
      <h3 className='text-[clamp(2rem,1.4966rem+2.3973vw,3.75rem)] my-4 font-semibold flex items-center after:border-b-2 after:grow after:ml-5'>
        <span className='relative inline-block'>
          Skills
          <AnimateSvgPath className='left-0 w-full -bottom-4 lg:-bottom-6' />
        </span>
      </h3>
      <div className='flex flex-col gap-4'>
        {skillGroups.map((skillGroup, skillGroupIndex) => (
          <div key={skillGroupIndex} className='flex gap-2'>
            {skillGroup.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='final'
                viewport={{ once: true }}
                custom={calculateCustom(skillGroupIndex, skillIndex)}
              >
                <Badge variant='secondary' className={cn('[&>svg]:size-5 text-md', skill.featured && 'bg-featured')}>
                  {<skill.icon />} {skill.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
