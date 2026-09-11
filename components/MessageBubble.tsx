import React from 'react';
import { Message } from '@/lib/store';
import clsx from 'clsx';

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={clsx('flex gap-3 animate-fade-in', {
        'justify-end': isUser,
        'justify-start': !isUser,
      })}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-nebula flex items-center justify-center flex-shrink-0 shadow-glow">
          <span className="text-white text-sm font-bold">N</span>
        </div>
      )}
      <div
        className={clsx(
          'rounded-2xl px-4 py-3 max-w-md shadow-lg backdrop-blur-sm',
          {
            'bg-nebula-purple/30 text-white border border-nebula-purple/50': isUser,
            'bg-space-800/50 text-white border border-nebula-blue/30 shadow-glow': !isUser,
          }
        )}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
        <p className="text-xs opacity-50 mt-1">
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
