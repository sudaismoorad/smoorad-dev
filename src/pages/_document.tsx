import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
					<meta name="author" content="Sudais Moorad" />
					<meta name="description" content="Personal Developer Blog!" />
					<meta name="og:title" content="Sudais Moorad" />
					<meta name="og:description" content="Personal Developer Blog!" />
					<meta name="og:url" content="https://smoorad.dev/" />
					<meta name="og:image" content="https://smoorad.dev/img/avatar.png" />
					<meta name="og:type" content="website" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@sudaismoorad" />
					<meta name="twitter:title" content="Computer Science Major at Vassar College, NY" />
					<meta name="twitter:description" content="This is my personal portfolio website" />
					<meta name="twitter:image" content="https://smoorad.dev/img/avatar.png" />
				</Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
