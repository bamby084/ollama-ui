import { create } from 'zustand';
import type { ChatMessage } from '../types/chat';

export interface Chat {
  id: string;
  messages: ChatMessage[];
}

export interface IChatStore{
  chats: Chat[];
  addNewChat: (chat: Chat) => void;
}

export const useChatStore = create<IChatStore>((set) => ({
  chats: [],
  addNewChat: (chat: Chat) => set((state) => ({
    chats: [...state.chats, chat]
  }))
}));