'use client'

import "./globals.css";
import { Theme } from '@radix-ui/themes';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body lang="en">
      <Theme>
        <main className="flex flex-col w-full mx-auto max-w-screen-2xl">{children}</main>
      </Theme>

    </body>
  );
}
