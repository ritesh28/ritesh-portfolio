import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

const COLORS = ['var(--chart-2)', 'var(--chart-4)', 'var(--chart-5)'];
export function ColorChange() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, var(--background) 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 25,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);
  return <motion.div className='absolute left-0 right-0 bottom-0 h-[15rem]' style={{ backgroundImage }} />;
}
