import { OpenAI } from 'openai';

export const createNvidiaClient = () => {
  return new OpenAI({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://integrate.api.nvidia.com/v1',
    apiKey: process.env.NVIDIA_API_KEY,
  });
};

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatRequest {
  messages: ChatMessage[];
  model?: string;
  temperature?: number;
  max_tokens?: number;
}

export interface ChatResponse {
  id: string;
  content: string;
  timestamp: Date;
}

export async function sendMessage(
  messages: ChatMessage[],
  model: string = 'meta/llama2-70b'
): Promise<ChatResponse> {
  const client = createNvidiaClient();

  try {
    const response = await client.chat.completions.create({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 2048,
    });

    const content = response.choices[0]?.message?.content || '';

    return {
      id: response.id,
      content,
      timestamp: new Date(),
    };
  } catch (error) {
    console.error('Error communicating with NVIDIA API:', error);
    throw error;
  }
}
