import { Header } from '@/components/Header'
import { CartProvider } from '@/contexts/cart-contetext'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1500px] grid-rows-app gap-5 px-8 py-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
