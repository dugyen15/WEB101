'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { AuthProvider } from '../contexts/authContext';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import MainLayout from '../components/layout/MainLayout';

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Toaster position="top-center" />
            <MainLayout>{children}</MainLayout>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}