import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dosis } from 'next/font/google';
import { Hydrate } from "@tanstack/react-query/hydration";

const dosis = Dosis({ subsets: ["latin"] })
const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {
  return <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
  <div className={`${dosis.className} max-w-sm mx-auto`}> 
  <Component {...pageProps} />
  </div>
    </Hydrate>
  </QueryClientProvider>
}
