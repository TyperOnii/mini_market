import { Header } from "@/widgets/header";
import "./globals.css";
import '@/shared/styles/index.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  );
}
