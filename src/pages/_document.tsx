import Document, { DocumentContext, Html, NextScript, Main, Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* Meta */}
          <meta name="description" content="" />
          <meta content="" name="keywords" />
          <meta name="robots" content="all" />
          <meta content="ko" name="locale" />
          <meta content="web" name="environment" />
          <link rel="icon" href="/new/favicon.ico" />

          {/* Meta - Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:url" content="https://" />
          <meta property="og:image" content="/new/meta/og-image.png" />
          <meta property="og:site_name" content="" />
          <meta property="og:locale" content="ko-KR" />
          <meta property="og:image:width" content="1336" />
          <meta property="og:image:height" content="772" />

          {/* Meta - Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:image" content="/new/meta/og-image.png" />
          <meta name="twitter:url" content="https://" />

          <meta content="KRW" name="currency" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
