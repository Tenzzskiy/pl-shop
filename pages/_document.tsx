import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head itemScope itemType="http://schema.org/WPHeader" />

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
