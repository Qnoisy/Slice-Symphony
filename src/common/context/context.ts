import React from 'react';
import { PizzasTypeNew } from 'types';

export const ThemeContext = React.createContext(null);

export interface IBasketC {
	AddCart: (id: string) => void;
}

export interface IComponentBasketC {
	basketArr: PizzasTypeNew[];
	setBasketArr: React.Dispatch<React.SetStateAction<PizzasTypeNew[]>>;
	clearBasket: () => void;
}

const defaultBasketC: IBasketC = {
	AddCart: () => {},
};

const defaultComponentBasketC: IComponentBasketC = {
	basketArr: [],
	setBasketArr: () => {},
	clearBasket: () => {},
};

export const BasketContext = React.createContext<IBasketC>(defaultBasketC);
export const ComponentBasketContext = React.createContext<IComponentBasketC>(
	defaultComponentBasketC
);
