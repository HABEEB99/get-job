import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GET-JOB</title>
        <meta name="description" content="A Linked-In like job portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen flex flex-col items-center justify-center">
        <h2> Home Page </h2>
      </main>
    </div>
  );
}
