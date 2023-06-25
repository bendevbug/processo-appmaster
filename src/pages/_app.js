import { GlobalCss } from "@/styles/Global"

GlobalCss()

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
