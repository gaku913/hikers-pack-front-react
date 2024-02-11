import { PropsWithChildren } from 'react';
import {
  QueryClient,
  QueryClientProvider as RqQueryClientProvider,
} from 'react-query';

export default function QueryClientProvider({
  children,
}: PropsWithChildren) {
  const client = new QueryClient();
  return (
    <RqQueryClientProvider client={client}>
      {children}
    </RqQueryClientProvider>
  )
}