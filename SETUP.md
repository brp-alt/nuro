# Nuro - Advanced Space-Themed AI Chat

A modern, feature-rich chat application with a captivating space theme, powered by NVIDIA's API.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- NVIDIA API key (get one at https://integrate.api.nvidia.com)

### Installation

```bash
# Clone the repository
git clone https://github.com/brp-alt/nuro.git
cd nuro

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Configuration

Edit `.env.local` and add your credentials:

```env
NEXT_PUBLIC_API_URL=https://integrate.api.nvidia.com/v1
NVIDIA_API_KEY=your_api_key_here
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 🎨 Features

✨ **Space-Themed UI**
- Beautiful gradient backgrounds
- Glowing nebula effects
- Animated stars and cosmic elements
- Dark mode optimized design

⚡ **Advanced Chat**
- Real-time message streaming
- Conversation history
- Typing indicators
- Timestamps on messages

🔐 **Secure Integration**
- NVIDIA API integration (OpenAI-compatible)
- Server-side API key handling
- Environment variable protection

📱 **Responsive Design**
- Mobile-friendly interface
- Touch-optimized inputs
- Adaptive layouts

## 📁 Project Structure

```
nuro/
├── app/
│   ├── api/chat/           # Chat API endpoint
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── not-found.tsx       # 404 page
├── components/
│   ├── ChatInterface.tsx   # Main chat component
│   ├── MessageBubble.tsx   # Message display
│   ├── InputBox.tsx        # Message input
│   └── SpaceBackground.tsx # Background effects
├── lib/
│   ├── nvidia-client.ts    # NVIDIA API client
│   └── store.ts            # Zustand store
├── public/
│   └── manifest.json       # PWA manifest
└── package.json            # Dependencies
```

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS with custom space theme
- **State Management**: Zustand
- **API**: NVIDIA (OpenAI-compatible)
- **HTTP Client**: Axios

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel dashboard.

### Docker

```bash
docker build -t nuro .
docker run -p 3000:3000 -e NVIDIA_API_KEY=your_key nuro
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | NVIDIA API endpoint | Yes |
| `NVIDIA_API_KEY` | Your NVIDIA API key | Yes |
| `DATABASE_URL` | PostgreSQL connection (optional) | No |

## 🎯 API Endpoints

### POST `/api/chat`

Send a message and get a response.

**Request:**
```json
{
  "messages": [
    { "role": "user", "content": "Hello!" }
  ]
}
```

**Response:**
```json
{
  "id": "chatcmpl-...",
  "content": "Hello! How can I help?",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

## 🔄 Available Models

- `meta/llama2-70b` (default)
- `meta/llama2-13b`
- `mistralai/mistral-7b-instruct-v0.2`
- And more from NVIDIA's model zoo

## 🐛 Troubleshooting

### API Key Issues
- Verify your NVIDIA API key is correctly set
- Check that the key is active (not expired)
- Ensure `NEXT_PUBLIC_API_URL` matches the NVIDIA endpoint

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version: `node -v` (should be 18+)

### Chat Not Working
- Open browser DevTools (F12) and check Console tab
- Check Network tab to see API requests
- Verify server logs: `npm run dev`

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Powered by [NVIDIA](https://www.nvidia.com/)
- State management by [Zustand](https://github.com/pmndrs/zustand)

## 📞 Support

For issues and questions, please open a GitHub issue or reach out to the community.

---

**Made with 🌌 and ⚡ by brp-alt**
