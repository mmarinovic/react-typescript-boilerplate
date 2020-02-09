import React from 'react';
import { ErrorBoundary } from 'shared/components/ErrorBoundary';

const App = () => (
  <React.StrictMode>
    <ErrorBoundary>Hi</ErrorBoundary>
  </React.StrictMode>
);

export default App;
