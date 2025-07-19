import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

const COLORS = ['#13ffaa', '#1e67c6', '#ce84cf', '#dd335c'];
export function AnimateRadialGradient() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, var(--background) 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 15,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);
  return <motion.div className='absolute left-0 right-0 bottom-0 h-[15rem]' style={{ backgroundImage }} />;
}
