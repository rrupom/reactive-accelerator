import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home Page",
  description: "App Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="border-b p-4 border-gray-400 mb-2">
          <ul className="flex gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
