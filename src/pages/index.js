import Head from 'next/head';
import firebase from '@/lib/FirebaseConfig';

export default function Home() {
  return (
    <>
      <Head>
        <title>Firebase Recipes</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='App'>
        <div className='title-row'>
          <h1 className='title'>Firebase Recipes</h1>
        </div>
      </main>
    </>
  );
}
