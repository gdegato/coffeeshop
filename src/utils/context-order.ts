import { createContext } from 'react';

export type ContextOrder = {
    contextOrder: string;
    setContextCartCount: (contextOrder: string) => void;
}

export const ContextOrder = createContext<ContextOrder>({
    contextOrder: '',
    setContextCartCount: () => {}
})