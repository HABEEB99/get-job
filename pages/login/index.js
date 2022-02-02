import Head from 'next/head';
import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Logo from '../../components/brandLogo/Logo';

const Login = ({ providers }) => {
  return (
    <div className='bg-body'>
      <Head>
        <title>GET-JOB | Login page</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl">Welcome to</h1>
          <div className='ml-4 flex items-center justify-center md:mt-4'>
            <Logo />
          </div>
        </div>
        <h2 className='mt-2 text-base md:text-xl lg:text-2xl text-gray-400'>Sign in to meet up with your future potential employer. </h2>
        <div>
          {Object.values(providers).map((provider) => (
            <div key={provider.id}>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className="bg-btn w-80 h-12 mt-6 rounded-lg text-white text-2xl hover:bg-logo"
              >
                {`Sign in with ${provider.name}`}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Login;

export const getServerSideProps = async (context) => {
  const providers = await getProviders();
  console.log(providers);
  return {
    props: {
      providers,
    },
  };
};
