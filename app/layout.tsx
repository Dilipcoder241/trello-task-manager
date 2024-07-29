"use client"
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyProvider } from "./(context)/context";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Trell Task Manager</title>
      </head>
      <body>
        <MyProvider>
          {children}
          <ToastContainer position="bottom-center" theme="dark" />
        </MyProvider>
      </body>
    </html>
  );
}
