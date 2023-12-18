import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Los metadatos y links van aquí */}
          <meta charSet="UTF-8" />
          <meta name="description" content="Nails Studio - Texas" />
          <meta name="keywords" content="Nails Saloon Studio Texas Dipping Gel Manicure Pedicure" />
          <meta name="author" content="Para" />
          <meta name="theme-color" content="#FF49C1" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap" 
            rel="stylesheet" 
          />
          <Script
            id="google-analytics-script"
            src={`https://www.googletagmanager.com/gtag/js?id=G-SJTZVX85DZ`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SJTZVX85DZ');
            `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
