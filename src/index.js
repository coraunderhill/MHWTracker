// Import modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import main React app
import App from './components/App.jsx';

// Import Sass
import './index.scss';

const root = createRoot(document.getElementById('MHWTracker'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
