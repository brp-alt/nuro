import React, { useState } from 'react';
import { useChatStore, Message } from '@/lib/store';
import MessageBubble from './MessageBubble';
import InputBox from './InputBox';
import clsx from 'clsx';

export default function ChatInterface() {
  const { messages, isLoading, addMessage, setLoading } = useChatStore();
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    addMessage(userMessage);
    setInputValue('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
            { role: 'user', content: inputValue },
          ],
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date(),
      };

      addMessage(assistantMessage);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '🌌 Lost signal to the cosmos... Please try again.',
        timestamp: new Date(),
      };
      addMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-space overflow-hidden">
      {/* Header */}
      <div className="border-b border-nebula-blue/20 bg-black/40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-nebula shadow-glow flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-nebula-blue to-nebula-purple bg-clip-text text-transparent">
                Nuro
              </h1>
              <p className="text-xs text-nebula-blue/60">✨ Space-Themed AI Assistant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto max-w-4xl w-full mx-auto px-4 py-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-6xl mb-4">🌌</div>
            <h2 className="text-3xl font-bold text-white mb-2">Welcome to Nuro</h2>
            <p className="text-nebula-blue/60 max-w-md">
              Embark on an interstellar journey through conversations. Ask me anything, and let's explore the cosmos of knowledge together.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-space-800/50 border border-nebula-blue/30 rounded-2xl px-4 py-3 max-w-md shadow-glow">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-nebula-blue rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-nebula-blue rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-nebula-blue rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="border-t border-nebula-blue/20 bg-black/40 backdrop-blur-md py-4">
        <InputBox
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSubmit={handleSendMessage}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
