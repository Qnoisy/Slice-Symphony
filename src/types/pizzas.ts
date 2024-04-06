export const enum PizzaEnumType {
	HOT = 'Hot',
	EXTRA = 'Extra',
	VEGETERIAN = 'Vegetarian',
	NO_ONION = 'No Onion',
	BESTSELLER = 'Bestseller',
	CLASSIC = 'Classic',
	MEAT = 'Meat',
	MUSHROOMS = 'Mushrooms',
	PREMIUM = 'Premium',
	CHICKEN = 'Chicken',
	VEGAN = 'Vegan',
	BBQ_SOUCE = 'BBQ Souce',
	RANCH_SOUCE = 'Ranch Souce',
}
export const enum typeDeals {
	DEALS = 'Deals',
	PIZZAS = 'Pizzas',
	DRINKS = 'Drinks',
	SOUCE = 'Souce',
}

export type FoodType = {
	id: string;
	type: typeDeals;
	name: string;
	img: string;
	description: string | null;
	price: number;
};

export type PizzasType = {
	info: FoodType;
	typePizzas?: PizzaEnumType[];
};
export interface PizzasTypeNew extends PizzasType {
	count: number;
}
