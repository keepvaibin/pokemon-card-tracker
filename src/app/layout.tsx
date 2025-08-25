// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ClientSessionProvider } from "@/components/ClientSessionProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientSessionProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"            // 🔑 no DB read here anymore
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
