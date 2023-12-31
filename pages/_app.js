import '@/styles/globals.css'
import { AuthProvider } from '@/contexts/authintication'

export default function App({ Component, pageProps }) {
  return ( <AuthProvider >
    <Component {...pageProps} />
  </AuthProvider>
  )}
