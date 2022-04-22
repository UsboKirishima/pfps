import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:title" content="SeArt" />
        <meta property="og:description" content="Post and share your drawings!" />
        <meta property="og:image" content="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="250" />
        <title>SeArt</title>
        <link rel="shortcut icon" href="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" type="image/x-icon" />
      </Head>
      <body className='absolute inset-0 bottom-0 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]'>
        <div className='relative'>
          <Navbar />
        </div>
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28" >
          <div className="sm:text-center lg:text-center">
            
          </div>
        </main>
      </body>
    </>
  );
}

export default Home;