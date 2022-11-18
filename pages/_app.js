import '../styles/globals.css';
import { QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
