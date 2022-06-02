import { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;