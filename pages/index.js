import Head from 'next/head';
import NavBar from '../components/NavBar';
import App from '../components/App';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - HomePage</title>
      </Head>
      <App />
    </>
  );
}
