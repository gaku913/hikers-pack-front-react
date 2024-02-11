import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthContextProvider } from './authenticate/AuthContextProvider.tsx'
import { BrowserRouter } from 'react-router-dom';
import QueryClientProvider from './api/QueryClientProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
