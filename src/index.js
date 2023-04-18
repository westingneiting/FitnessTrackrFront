import { createRoot } from 'react-dom/client';
import { App } from './components';

const root = createRoot(document.querySelector('#app'));

root.render(<App />);
