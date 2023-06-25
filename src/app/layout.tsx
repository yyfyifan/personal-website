import "./globals.css";
import { DarkModeContextProvider } from "@/contexts";
import { SnapContainer } from "@/components/scroll-snaps";
import { greatVibes, josefinSans, inter } from "@/fonts";
import classNames from "classnames";

export const metadata = {
  title: "Yifan Yang | Software Engineer",
  description: "Yifan Yang's Personal Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={classNames(
        greatVibes.variable,
        josefinSans.variable,
        inter.variable,
        inter.className
      )}>
      <body>
        <DarkModeContextProvider>
          {/* A snap container with full-page scrolling */}
          <SnapContainer className="h-screen">{children}</SnapContainer>
        </DarkModeContextProvider>
      </body>
    </html>
  );
}
