import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DarkMode',
  description: 'Generated by Quang',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-gray-950 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className='flex justify-center items-center py-10 mb-20 '>
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
