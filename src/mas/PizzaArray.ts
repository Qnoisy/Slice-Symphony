import { PizzaEnumType, PizzasTypeArray } from '../types/index';

export const PizzaArray: PizzasTypeArray[] = [
	{
		info: {
			id: 'Pepperoni Jalapeño',
			name: 'Pepperoni Jalapeño',
			img: 'img/pizzas/Pepperoni.webp',
			description:
				'A treat for fans of spicy flavors: tomato sauce, mozzarella, pepperoni and jalapeño pepper.',
			price: 10.99,
		},
		typePizzas: [PizzaEnumType.HOT, PizzaEnumType.EXTRA],
	},
	{
		info: {
			id: 'Mexican',
			name: 'Mexican',
			img: 'img/pizzas/Mexican.webp',
			description:
				'Pizza with a fiery temper: tomato sauce, mozzarella, spicy beef, green peppers, white onions, jalapeño peppers and chili flakes.',
			price: 11.99,
		},
		typePizzas: [PizzaEnumType.HOT, PizzaEnumType.EXTRA],
	},
	{
		info: {
			id: 'Double Pepperoni',
			name: 'Double Pepperoni',
			img: 'img/pizzas/DoublePepperoni.webp',
			description:
				'Pizza that won the hearts of pizza lovers of all ages: tomato sauce, mozzarella, ham and pineapple.',
			price: 11.99,
		},
		typePizzas: [
			PizzaEnumType.EXTRA,
			PizzaEnumType.NO_ONION,
			PizzaEnumType.BESTSELLER,
			PizzaEnumType.MEAT,
		],
	},
	{
		info: {
			id: 'Hawaiian',
			name: 'Hawaiian',
			img: 'img/pizzas/Mexican.webp',
			description:
				'Pizza with a fiery temper: tomato sauce, mozzarella, spicy beef, green peppers, white onions, jalapeño peppers and chili flakes.',
			price: 10.99,
		},
		typePizzas: [
			PizzaEnumType.EXTRA,
			PizzaEnumType.NO_ONION,
			PizzaEnumType.BESTSELLER,
			PizzaEnumType.MEAT,
		],
	},
	{
		info: {
			id: 'Capricciosa',
			name: 'Capricciosa',
			img: 'img/pizzas/Capricciosa.webp',
			description:
				'Flavors that spark joy: tomato sauce, mozzarella, ham, mushrooms and tomatoes.',
			price: 10.99,
		},
		typePizzas: [
			PizzaEnumType.EXTRA,
			PizzaEnumType.NO_ONION,
			PizzaEnumType.MEAT,
			PizzaEnumType.MUSHROOMS,
		],
	},
	{
		info: {
			id: 'Carbonara',
			name: 'Carbonara',
			img: 'img/pizzas/Carbonara.webp',
			description:
				'Rich and creamy: crème fraîche sauce, mozzarella, bacon, white onions and mushrooms.',
			price: 10.99,
		},
		typePizzas: [
			PizzaEnumType.EXTRA,
			PizzaEnumType.MEAT,
			PizzaEnumType.MUSHROOMS,
		],
	},
	{
		info: {
			id: 'Garden Party',
			name: 'Garden Party',
			img: 'img/pizzas/GardenParty.webp',
			description:
				'Colorful and tempting veggie option: tomato sauce, mozzarella, mushrooms, tomatoes, red onions, green peppers and sweetcorn.',
			price: 10.99,
		},
		typePizzas: [
			PizzaEnumType.EXTRA,
			PizzaEnumType.VEGETERIAN,
			PizzaEnumType.MUSHROOMS,
		],
	},
	{
		info: {
			id: 'Chicken BBQ',
			name: 'Chicken BBQ',
			img: 'img/pizzas/ChickenBBQ.webp',
			description:
				'Pizza on tomato sauce with mozzarella, bacon, grilled chicken, white onions and BBQ sauce on top.',
			price: 11.99,
		},
		typePizzas: [
			PizzaEnumType.EXTRA,
			PizzaEnumType.CHICKEN,
			PizzaEnumType.BBQ_SOUCE,
		],
	},
	{
		info: {
			id: 'Chicken Ranch',
			name: 'Chicken Ranch',
			img: 'img/pizzas/ChickenRanch.webp',
			description:
				'Double ranch sauce, mozzarella, grilled chicken, bacon, tomatoes and fresh garlic.',
			price: 11.99,
		},
		typePizzas: [
			PizzaEnumType.EXTRA,
			PizzaEnumType.NO_ONION,
			PizzaEnumType.BESTSELLER,
			PizzaEnumType.CHICKEN,
			PizzaEnumType.RANCH_SOUCE,
		],
	},
	{
		info: {
			id: 'Chicken Cheddar Club',
			name: 'Chicken Cheddar Club',
			img: 'img/pizzas/ChickenCheddarClub.webp',
			description:
				'Tomato sauce, mozzarella, cheddar, grilled chicken, spinach, bacon, tomatoes and ranch sauce on top.',
			price: 11.99,
		},
		typePizzas: [
			PizzaEnumType.NO_ONION,
			PizzaEnumType.MEAT,
			PizzaEnumType.CHICKEN,
			PizzaEnumType.RANCH_SOUCE,
		],
	},
	{
		info: {
			id: 'Margherita',
			name: 'Margherita',
			img: 'img/pizzas/Margherita.webp',
			description:
				'Double ranch sauce, mozzarella, grilled chicken, bacon, tomatoes and fresh garlic.',
			price: 7.99,
		},
		typePizzas: [
			PizzaEnumType.VEGETERIAN,
			PizzaEnumType.BESTSELLER,
			PizzaEnumType.NO_ONION,
			PizzaEnumType.CLASSIC,
		],
	},
	{
		info: {
			id: "Papa's Favourite",
			name: "Papa's Favourite",
			img: "img/pizzas/Papa'sFavourite.webp",
			description:
				'Pepperoni, mix of 5 authentic Italian cheese, italian seasoning, mozzarella, pork',
			price: 11.99,
		},
		typePizzas: [
			PizzaEnumType.NO_ONION,
			PizzaEnumType.BESTSELLER,
			PizzaEnumType.MEAT,
			PizzaEnumType.PREMIUM,
		],
	},

	{
		info: {
			id: 'Super Papa',
			name: 'Super Papa',
			img: 'img/pizzas/SuperPapa.webp',
			description:
				'Loaded with the best ingredients: tomato sauce, mozzarella, Italian sausages, pepperoni, ham, mushrooms, white onions, green peppers, black olives.',
			price: 11.99,
		},
		typePizzas: [
			PizzaEnumType.BESTSELLER,
			PizzaEnumType.MEAT,
			PizzaEnumType.MUSHROOMS,
			PizzaEnumType.PREMIUM,
		],
	},
	{
		info: {
			id: 'Italian Adventure',
			name: 'Italian Adventure',
			img: 'img/pizzas/ItalianAdventure.webp',
			description:
				'A world-class classic: tomato sauce, mozzarella, smoked ham, cherry tomatoes, arugula and Grana Padano.',
			price: 11.99,
		},
		typePizzas: [PizzaEnumType.BESTSELLER, PizzaEnumType.PREMIUM],
	},
	{
		info: {
			id: 'Home Spring',
			name: 'Home Spring',
			img: 'img/pizzas/HomeSpring.webp',
			description:
				'Traditional flavor with a hint of nostalgia: tomato sauce, mozzarella, Mediterranean cheese, grilled chicken, ham, tomatoes, green peppers, and white onions.',
			price: 11.99,
		},
		typePizzas: [PizzaEnumType.MEAT, PizzaEnumType.CHICKEN],
	},
	{
		info: {
			id: 'AlltheMeats',
			name: 'AlltheMeats',
			img: 'img/pizzas/HomeSpring.webp',
			description:
				'Pizza for real meat lovers: tomato sauce, mozzarella, pepperoni, ham, bacon, pork and spicy beef.',
			price: 11.99,
		},
		typePizzas: [PizzaEnumType.MEAT],
	},
	{
		info: {
			id: 'Cheese Feast',
			name: 'Cheese Feast',
			img: 'img/pizzas/CheeseFeast.webp',
			description:
				'Say: CHEESE! Here comes our pizza with tomato sauce and 4 types of cheese: mozzarella, Mediterranean type cheese, blue cheese and Grana Padano.',
			price: 11.99,
		},
		typePizzas: [PizzaEnumType.PREMIUM, PizzaEnumType.VEGAN],
	},
];
