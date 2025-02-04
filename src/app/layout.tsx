import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Agnaldo Felix',
<<<<<<< HEAD
  description: 'Agnaldo Felix é um Engenheiro de Software',
=======
  description: 'Agnaldo Felix é um Desenvolvedor de Software',
  icons: {
    icon: '/favicon.ico', // Adiciona o favicon aqui
  },
>>>>>>> 3eca9f67bcfaca430cd8bb9d03d259c59df61987
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
