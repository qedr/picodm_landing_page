import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div className="mb-6 text-center">
          <h1 className="text-blue-500 text-5xl font-black mb-2">
            Twitter Outreach Made Easy
          </h1>
          <p className="text-gray-400 text-2xl font-medium">
            Find new customers on Twitter, send them personalized messages, grow
            your business.
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-3xl">
          Get Early Access
        </button>
      </main>
      <div id="how-it-works"></div>
      <div id="faq"></div>
      <footer className={styles.footer}>
        <p className="text-gray-500">Created with 💙 in Sydney.</p>
      </footer>
    </div>
  );
}
