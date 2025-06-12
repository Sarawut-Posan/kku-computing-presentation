import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="th">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&family=JetBrains+Mono:wght@400;700&family=Fira+Code:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="description" content="KKU Computing College Orientation" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
