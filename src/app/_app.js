// pages/_app.js
import '../styles/globals.css';
import { I18nextProvider } from 'react-i18next';
import { useEffect } from 'react';
import i18n from '../i18n';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Set language from cookies if available
  useEffect(() => {
    const lang = Cookies.get('lang');
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
