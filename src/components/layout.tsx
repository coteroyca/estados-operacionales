// src/app/layout.tsx
import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata = {
  title: "RetailMind Dashboard POC",
  description: "Demo estática de dashboard RetailMind"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/lucide@latest"></script>
      </head>
      <body className="text-gray-200 min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
