import type { Metadata } from 'next';
import ChatInterface from '@/components/ChatInterface';
import SpaceBackground from '@/components/SpaceBackground';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nuro - Space-Themed AI Chat',
  description: 'Advanced AI chat application with a captivating space theme powered by NVIDIA',
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
        <SpaceBackground />
        <ChatInterface />
      </body>
    </html>
  );
}
