import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dosis } from "next/font/google";
import Hoc from "@/components/shared/Hoc";

const dosis = Dosis({ subsets: ["latin"] });
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${dosis.className} max-w-sm mx-auto`}>
        <Hoc />
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
