import Head from "next/head";

export default function Header(info) {
  return (
    <Head>
      <title>Anthony Di Stefano | {info.pageName}</title>
      <meta name="description" content="Anthony Di Stefano - Software Developer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}