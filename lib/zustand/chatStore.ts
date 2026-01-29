import {create} from "zustand";



interface chatStore {
    conversation_id: string;
    conversation_type: string;
    conversation_name: string;
    setConversationId: (id: string) => void;
    setConversationType: (type: string) => void;
    setConversationName: (name: string) => void;
}

export const useChatStore = create<chatStore>((set) => ({
    conversation_id: "",
    conversation_type: "",
    conversation_name: "",
    setConversationId: (id: string) => set({ conversation_id: id }),
    setConversationType: (type: string) => set({ conversation_type: type }),
    setConversationName: (name: string) => set({ conversation_name: name }),
    
}))
