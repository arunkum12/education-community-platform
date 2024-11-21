import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BellIcon, ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/outline'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EduConnect',
  description: 'Educational Community Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="/" className="text-2xl font-bold text-blue-600">EduConnect</Link>
                </div>
                <nav className="hidden md:flex space-x-10">
                  <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</Link>
                  <Link href="/events" className="text-base font-medium text-gray-500 hover:text-gray-900">Events</Link>
                  <Link href="/resources" className="text-base font-medium text-gray-500 hover:text-gray-900">Resources</Link>
                  <Link href="/community" className="text-base font-medium text-gray-500 hover:text-gray-900">Community</Link>
                </nav>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <div className="flex items-center space-x-4">
                    <BellIcon className="h-6 w-6 text-gray-400" />
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Button variant="ghost">
                      <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Button variant="ghost">
                    <Bars3Icon className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 text-sm">
                © 2023 EduConnect. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}