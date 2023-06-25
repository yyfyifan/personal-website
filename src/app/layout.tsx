import "./globals.css";
import { Inter } from "next/font/google";
import { DarkModeContextProvider } from "@/contexts";
import { SnapContainer } from "@/components/scroll-snaps";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yifan Yang",
  description: "Yifan Yang's Personal Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeContextProvider>
          {/* A snap container with full-page scrolling */}
          <SnapContainer className="h-screen">{children}</SnapContainer>
        </DarkModeContextProvider>
      </body>
    </html>
  );
}
