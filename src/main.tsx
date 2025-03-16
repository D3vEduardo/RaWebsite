import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import AuthProvider from './contexts/auth/provider.tsx';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./assets/libs/reactQuery.ts";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        closeOnClick
        pauseOnFocusLoss
      />
      <App />
    </QueryClientProvider>
  </AuthProvider>,
)
