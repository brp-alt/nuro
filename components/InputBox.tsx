import React, { FormEvent } from 'react';
import clsx from 'clsx';

interface InputBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
  disabled: boolean;
}

export default function InputBox({
  value,
  onChange,
  onSubmit,
  disabled,
}: InputBoxProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      onSubmit(e as any);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-4xl mx-auto px-4">
      <div className="relative flex gap-3 items-end">
        <textarea
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder="Send a message to explore the cosmos..."
          disabled={disabled}
          rows={1}
          className={clsx(
            'flex-1 bg-space-800/30 border border-nebula-blue/30 rounded-2xl px-4 py-3',
            'text-white placeholder-nebula-blue/40 focus:outline-none focus:border-nebula-blue/60',
            'resize-none transition-all focus:shadow-glow disabled:opacity-50',
            'max-h-32'
          )}
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className={clsx(
            'px-6 py-3 rounded-xl font-semibold transition-all',
            'bg-gradient-nebula hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed',
            'text-white flex items-center gap-2'
          )}
        >
          <span>Send</span>
          <span>🚀</span>
        </button>
      </div>
    </form>
  );
}
