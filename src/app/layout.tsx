import type { Metadata } from "next";
import Link  from "next/link";
import "./globals.css";


export const metadata: Metadata = {
  title: "Name Age/Gender/Country Predictor",
  description: "A Next practice app created using 3 APIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans flex flex-col h-screen items-center justify-between">
        <div
          className="hidden md:flex md:items-center w-full"
          id="menu"
        >
          <nav className="bg-white w-full px-4 py-2">
            <ul className=" mb-auto md:flex items-center justify-between text-2xl text-gray-700 pt-4 md:pt-0">
              <h1>Predict Data Based on Your Name!</h1>
              <li>
                <Link
                  className="md:p-4 py-3 px-0 block transition hover:bg-purple-200 rounded"
                  href="/"
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {children}
        <footer className="bg-white text-black w-full px-4 py-2">
          <p>
            Tutorial Source Code: 
            <Link className="transition hover:bg-purple-200 rounded px-2" href="https://www.youtube.com/watch?v=PtDIVU_tlo0">
               NextJS Beginner Project Tutorial - PedroTech
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
