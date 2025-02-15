"use client";

import { PropsWithChildren, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const ReactQueryProvider = ({ children }: PropsWithChildren) => {

  const queryClient = useMemo(() => new QueryClient(), [])

  return (
    <QueryClientProvider client={queryClient} >
      {children}
    </QueryClientProvider>
  )
};

export default ReactQueryProvider