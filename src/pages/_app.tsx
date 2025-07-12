import { ThemeProvider } from '@/components/theme-provider';
import '@/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
