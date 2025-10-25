import { motion, Variants } from 'framer-motion';

export const buttonVariants = (noInitialAnimation: boolean = false) =>
  ({
    initial: noInitialAnimation ? { scale: 1 } : { scale: 0.8 },
    final: { scale: 1, transition: { type: 'spring', stiffness: 400, damping: 17 } },
    whileHover: { scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 17 } },
    whileTap: { scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 17 } },
  }) satisfies Variants;

interface AnimateButtonVariantProps {
  noInitialAnimation?: boolean;
  children: React.ReactNode;
}
export function AnimateButtonVariant({ noInitialAnimation, children }: AnimateButtonVariantProps) {
  return (
    <motion.div
      className='w-fit'
      variants={buttonVariants(noInitialAnimation)}
      initial='initial'
      animate='final'
      whileHover='whileHover'
      whileTap='whileTap'
    >
      {children}
    </motion.div>
  );
}
