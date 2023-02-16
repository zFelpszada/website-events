import '@/styles/globals.css';

import { Head } from './interface/index.js';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head />
			<Component {...pageProps} />
		</>
	);
}
