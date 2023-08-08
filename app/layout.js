import Header from '@/components/Header'
import './globals.css'


export const metadata = {
  title: 'askMitchel',
  description: 'Your very own information dispatcher',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
