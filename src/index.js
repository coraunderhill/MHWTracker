// Import modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import main React app
import App from './App.jsx';

const root = createRoot(document.getElementById('MHWTracker'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
