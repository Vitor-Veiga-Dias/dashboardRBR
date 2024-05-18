import { ChakraProvider, Stack, VStack } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from './components/header';
import './globals.css';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard RBR Digital',
  description: 'Gerencie seus funcionários e clientes com facilidade',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <ChakraProvider>
            <Stack spacing={8} width="100%">
              <Header />
              <VStack width="100%">
                <Stack
                  width="100%"
                  justifyContent="center"
                  alignItems="center"
                  maxW="1300px"
                >
                  {children}
                </Stack>
              </VStack>
            </Stack>
          </ChakraProvider>
        </main>
      </body>
    </html>
  );
}
