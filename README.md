# 🌌 Nuro - Advanced Space-Themed AI Chat

Nuro is an advanced AI chat application with a captivating space theme, powered by NVIDIA's API for state-of-the-art language processing.

## Features

- 🚀 Real-time AI conversations
- 🌠 Beautiful space-themed UI
- 💾 Conversation history & persistence
- 🔒 Secure API integration with NVIDIA
- ⚡ Fast & responsive interface
- 🎨 Dark mode optimized design

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, TailwindCSS
- **Backend**: Node.js, Express
- **AI API**: NVIDIA (OpenAI-compatible endpoint)
- **Database**: PostgreSQL (optional)
- **Deployment**: Vercel/Docker

## Getting Started

### Prerequisites
- Node.js 18+
- NVIDIA API key

### Installation

```bash
# Clone repository
git clone https://github.com/brp-alt/nuro.git
cd nuro

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
```

### Configuration

Add your NVIDIA API key to `.env.local`:
```
NEXT_PUBLIC_API_URL=https://integrate.api.nvidia.com/v1
NVIDIA_API_KEY=your_api_key_here
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
nuro/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── chat/              # Chat interface
│   └── api/               # API routes
├── components/            # React components
│   ├── ChatInterface.tsx
│   ├── MessageBubble.tsx
│   └── SpaceTheme/
├── lib/                   # Utilities
│   ├── nvidia-client.ts
│   └── chat-utils.ts
├── styles/                # Global styles
└── public/                # Static assets
```

## License

MIT

---

**Made with 🌌 and ⚡**
