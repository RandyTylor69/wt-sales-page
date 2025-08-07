import "./globals.css";
import localFont from "next/font/local";
import {Inter} from "next/font/google"

const kenyan_coffee = localFont({
  src:"../fonts/kenyan-coffee.otf",
  variable: "--font-kenyan-coffee"
})

const inter = Inter({
  subsets:['latin']
})



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kenyan_coffee.variable} ${inter.className}`}>
      <body>{children}</body>
    </html>
  );
}
