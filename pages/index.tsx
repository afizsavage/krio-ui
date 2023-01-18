import Head from 'next/head';
import { Inter } from '@next/font/google';
import Typography from '@mui/material/Typography';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Krio Dictionary</title>
        <meta name="description" content="A web based Krio dictionary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Typography>Krio Dictionary</Typography>
      </main>
    </>
  );
}
