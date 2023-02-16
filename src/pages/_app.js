import '@/styles/globals.css';

import { Head } from './components/Head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head />
			<Component {...pageProps} />
		</>
	);
}
