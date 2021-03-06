import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head itemScope itemType="http://schema.org/WPHeader">
                    <meta charSet="utf-8" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/images/bg.jpg" />
                    <meta property="og:locale" content="ru_RU" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/favicon/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="msapplication-TileColor" content="#2b5797" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                {/* <Script src="/ymetrica.js" strategy="lazyOnload" /> */}
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
