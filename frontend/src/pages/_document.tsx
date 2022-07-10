import {
  Html,
  Head,
  Main,
  NextScript
} from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>LuciLua</title>
        <meta
          name='description'
          content='Info about me'
        />
        <meta
          name='keywords'
          content='lucilua, intagram, info'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
