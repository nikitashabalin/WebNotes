import { AppProps } from "next/app";
import { ReactElement } from "react";

import "../themes/styles.scss";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
