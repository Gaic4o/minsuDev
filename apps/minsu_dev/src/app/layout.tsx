import { Montserrat } from 'next/font/google';
import Providers from '@/foo/provider';
import StyledComponentsRegistry from '@/foo/provider/styledComponentsRegistry';
import { Metadata } from 'next';
import { Footer, Header } from '@/foo/layout';
import styles from '@/foo/layout/layout.module.css';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: '민수의 블로그',
  description: '민수의 개발 블로그 입니다.',
  icons: {
    icon: '/fire.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'ko'}>
      <head />
      <body>
        <StyledComponentsRegistry>
          <div className={styles.container}>
            <div className={`${styles.layout} ${montserrat.className}`}>
              <Providers>
                <Header />
                {children}
                <Footer />
              </Providers>
            </div>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
