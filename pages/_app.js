import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/globalStyles";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <PersistGate
          loading={<Component {...pageProps} />}
          persistor={persistor}
        >
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
