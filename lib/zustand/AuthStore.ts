import {create} from "zustand";


// interface User{
//     id:string;
//     email:string;
//     role:string
// }

interface AuthStore {
    user: any;
    setUser: (user: any) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    setUser: (user:any) => set({user}),
    
}))
