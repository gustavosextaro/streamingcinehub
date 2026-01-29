import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import { ProfileProvider } from '@/context/profile-context';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'CineHub',
  description: 'Seu catálogo de filmes e curadoria pessoal.',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
          'font-body antialiased min-h-screen bg-background',
        )} suppressHydrationWarning>
        <FirebaseClientProvider>
          <ProfileProvider>
            {children}
          </ProfileProvider>
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
