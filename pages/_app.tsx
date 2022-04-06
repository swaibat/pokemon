import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import GlobalStyle from "../components/GlobalStyle";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
    </>
  );
}

export default MyApp;
