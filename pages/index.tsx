// import Head from 'next/head';
// import { Inter } from '@next/font/google';
// import Typography from '@mui/material/Typography';

import { ReactElement } from 'react';
import DefaultLayout from '../components/layouts/default';
import { getCurrentUser } from '../utils/methods';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;

// const inter = Inter({ subsets: ['latin'] });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Krio Dictionary - Home</title>
//         <meta name="description" content="A web based Krio dictionary" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>
//         <Typography>Krio Dictionary</Typography>
//       </main>
//     </>
//   );
// }
