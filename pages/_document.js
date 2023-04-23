import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Jhony Saenz Portafolio"></meta>
        <style>{`
          html,
          body {
            height: 100%;
            margin: 0;
            padding: 0;
          }
          main {
            min-height: calc(100vh - 110px); /* 128px = height of the header + footer */
          }
        `}</style>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
