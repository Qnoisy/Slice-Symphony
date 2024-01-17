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

export type PizzaType = {
	id: string;
	name: string;
	img: string;
	description: string;
	price: number;
};

export type PizzasTypeArray = {
	info: PizzaType;
	typePizzas: PizzaEnumType[];
};
