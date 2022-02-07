import Head from 'next/head';
import Header from '../components/Header';
import MyDocuments from '../components/MyDocuments';
import NewDocument from '../components/NewDocument';
import Login from '../components/Login';
import { useSession, getSession } from 'next-auth/react';

export default function Home() {
  const { session } = useSession();

  if (!session) return <Login />

  return (
    <div>
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NewDocument />
      <MyDocuments />

    </div>
  );
}
