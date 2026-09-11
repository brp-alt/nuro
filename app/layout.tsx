import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nuro - Space-Themed AI Experience',
  description: 'Explore the cosmos of artificial intelligence with Nuro - a futuristic space-themed experience',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '🌌',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-space text-white">
        {children}
      </body>
    </html>
  );
}
