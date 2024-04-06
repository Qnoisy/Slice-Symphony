import React from 'react';
export const ThemeContext = React.createContext(null);

export interface IContext {
	AddCart: (id: string) => void;
	// removeTodo: (id: number) => void;
}

export const BasketContext = React.createContext<any>(null);
