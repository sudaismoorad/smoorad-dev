import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Head from "next/head";
import theme from '../theme'
import "./styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Sudais Moorad - Developer, Tech Enthusiast, Student</title>
      </Head>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
