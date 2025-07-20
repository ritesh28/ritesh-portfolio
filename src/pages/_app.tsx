import { ThemeProvider } from '@/components/theme-provider';
import '@/globals.css';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';

const variant: Variants = {
  initialState: { opacity: 0, clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' },
  animateState: { opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
  exitState: { opacity: 0, clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' },
};

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <AnimatePresence
        mode='wait'
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <motion.div
          key={router.route}
          variants={variant}
          transition={{ duration: 0.5 }}
          initial='initialState'
          animate='animateState'
          exit='exitState'
          className='min-h-screen'
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
