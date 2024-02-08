import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthContextProvider } from './authenticate/AuthContextProvider.tsx'
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
