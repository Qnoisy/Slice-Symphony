import { PizzaEnumType, PizzasType, typeDeals } from '../types/index';

export const FoodArray: PizzasType[] = [
	{
		info: {
			id: 'Pepperoni Jalapeño',
			type: typeDeals.PIZZAS,
			name: 'Pepperoni Jalapeño',
			img: 'img/pizzas/Pepperoni.webp',
			description:
				'A treat for fans of spicy flavors: tomato sauce, mozzarella, pepperoni and jalapeño pepper.',
			price: 9.99,
		},
		typePizzas: [PizzaEnumType.HOT, PizzaEnumType.EXTRA],
	},
	{
		info: {
			id: 'Mexican',
			type: typeDeals.PIZZAS,
			name: 'Mexican',
			img: 'img/pizzas/Mexican.webp',
			description:
				'Pizza with a fiery temper: tomato sauce, mozzarella, spicy beef, green peppers, white onions, jalapeño peppers and chili flakes.',
			price: 10.99,
		},
		typePizzas: [PizzaEnumType.HOT, PizzaEnumType.EXTRA],
	},
	{
		info: {
			id: 'Double Pepperoni',
			type: typeDeals.PIZZAS,
			name: 'Double Pepperoni',
			img: 'img/pizzas/DoublePepperoni.webp',
			description:
				'Pizza that won the hearts of pizza lovers of all ages: tomato sauce, mozzarella, ham and pineapple.',
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
			id: 'Hawaiian',
			type: typeDeals.PIZZAS,
			name: 'Hawaiian',
			img: 'img/pizzas/Mexican.webp',
			description:
				'Pizza with a fiery temper: tomato sauce, mozzarella, spicy beef, green peppers, white onions, jalapeño peppers and chili flakes.',
			price: 9.99,
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
			type: typeDeals.PIZZAS,
			name: 'Capricciosa',
			img: 'img/pizzas/Capricciosa.webp',
			description:
				'Flavors that spark joy: tomato sauce, mozzarella, ham, mushrooms and tomatoes.',
			price: 9.99,
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
			type: typeDeals.PIZZAS,
			name: 'Carbonara',
			img: 'img/pizzas/Carbonara.webp',
			description:
				'Rich and creamy: crème fraîche sauce, mozzarella, bacon, white onions and mushrooms.',
			price: 9.99,
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
			type: typeDeals.PIZZAS,
			name: 'Garden Party',
			img: 'img/pizzas/GardenParty.webp',
			description:
				'Colorful and tempting veggie option: tomato sauce, mozzarella, mushrooms, tomatoes, red onions, green peppers and sweetcorn.',
			price: 9.99,
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
			type: typeDeals.PIZZAS,
			name: 'Chicken BBQ',
			img: 'img/pizzas/ChickenBBQ.webp',
			description:
				'Pizza on tomato sauce with mozzarella, bacon, grilled chicken, white onions and BBQ sauce on top.',
			price: 9.99,
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
			type: typeDeals.PIZZAS,
			name: 'Chicken Ranch',
			img: 'img/pizzas/ChickenRanch.webp',
			description:
				'Double ranch sauce, mozzarella, grilled chicken, bacon, tomatoes and fresh garlic.',
			price: 10.99,
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
			type: typeDeals.PIZZAS,
			name: 'Chicken Cheddar Club',
			img: 'img/pizzas/ChickenCheaddarClub.webp',
			description:
				'Tomato sauce, mozzarella, cheddar, grilled chicken, spinach, bacon, tomatoes and ranch sauce on top.',
			price: 10.99,
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
			type: typeDeals.PIZZAS,
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
			type: typeDeals.PIZZAS,
			name: "Papa's Favourite",
			img: "img/pizzas/Papa'sFavourite.webp",
			description:
				'Pepperoni, mix of 5 authentic Italian cheese, italian seasoning, mozzarella, pork',
			price: 10.99,
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
			type: typeDeals.PIZZAS,
			name: 'Super Papa',
			img: 'img/pizzas/SuperPapa.webp',
			description:
				'Loaded with the best ingredients: tomato sauce, mozzarella, Italian sausages, pepperoni, ham, mushrooms, white onions, green peppers, black olives.',
			price: 10.99,
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
			type: typeDeals.PIZZAS,
			name: 'Italian Adventure',
			img: 'img/pizzas/ItalianAdventure.webp',
			description:
				'A world-class classic: tomato sauce, mozzarella, smoked ham, cherry tomatoes, arugula and Grana Padano.',
			price: 10.99,
		},
		typePizzas: [PizzaEnumType.BESTSELLER, PizzaEnumType.PREMIUM],
	},
	{
		info: {
			id: 'Home Spring',
			type: typeDeals.PIZZAS,
			name: 'Home Spring',
			img: 'img/pizzas/HomeSpring.webp',
			description:
				'Traditional flavor with a hint of nostalgia: tomato sauce, mozzarella, Mediterranean cheese, grilled chicken, ham, tomatoes, green peppers, and white onions.',
			price: 10.99,
		},
		typePizzas: [PizzaEnumType.MEAT, PizzaEnumType.CHICKEN],
	},
	{
		info: {
			id: 'AlltheMeats',
			type: typeDeals.PIZZAS,
			name: 'AlltheMeats',
			img: 'img/pizzas/HomeSpring.webp',
			description:
				'Pizza for real meat lovers: tomato sauce, mozzarella, pepperoni, ham, bacon, pork and spicy beef.',
			price: 10.99,
		},
		typePizzas: [PizzaEnumType.MEAT],
	},
	{
		info: {
			id: 'Cheese Feast',
			type: typeDeals.PIZZAS,
			name: 'Cheese Feast',
			img: 'img/pizzas/CheeseFeast.webp',
			description:
				'Say: CHEESE! Here comes our pizza with tomato sauce and 4 types of cheese: mozzarella, Mediterranean type cheese, blue cheese and Grana Padano.',
			price: 10.99,
		},
		typePizzas: [PizzaEnumType.PREMIUM, PizzaEnumType.VEGAN],
	},
	{
		info: {
			id: 'Set of 3 sauces',
			type: typeDeals.DEALS,
			name: 'Set of 3 sauces',
			img: 'img/deals/souse.webp',
			description: 'Ranch, BBQ, tomato',
			price: 0.99,
		},
	},
	{
		info: {
			id: 'Double pepsi',
			type: typeDeals.DEALS,
			name: 'Double Pepsi',
			img: 'img/deals/PepsiDouble.webp',
			description: null,
			price: 2.99,
		},
	},
	{
		info: {
			id: '7UP',
			type: typeDeals.DRINKS,
			name: '7UP',
			img: 'img/deals/7UP.webp',
			description:
				'The light crisp, iconic lemon and lime flavor offers a unique, balanced taste that will leave you feeling refreshed.',
			price: 1.99,
		},
	},
	{
		info: {
			id: 'Mirinda',
			type: typeDeals.DRINKS,
			name: 'Mirinda',
			img: 'img/deals/Mirinda.webp',
			description: 'A refreshing orange flavoured sparkling drink.',
			price: 1.99,
		},
	},
	{
		info: {
			id: 'Pepsi',
			type: typeDeals.DRINKS,
			name: 'Pepsi',
			img: 'img/deals/Pepsi.webp',
			description: 'Iconic drink with a unique, refreshing taste.',
			price: 1.99,
		},
	},
	{
		info: {
			id: 'Pepsi Max',
			type: typeDeals.DRINKS,
			name: 'Pepsi Max',
			img: 'img/deals/PepsiMax.webp',
			description: 'Maximum taste, no sugar.',
			price: 1.99,
		},
	},
	{
		info: {
			id: 'BBQ',
			type: typeDeals.SOUCE,
			name: 'BBQ',
			img: 'img/deals/BBQ.webp',
			description: null,
			price: 0.49,
		},
	},
	{
		info: {
			id: 'Sweet Chilli',
			type: typeDeals.SOUCE,
			name: 'Sweet Chilli',
			img: 'img/deals/SweetChilli.webp',
			description: null,
			price: 0.49,
		},
	},
	{
		info: {
			id: 'Tomato',
			type: typeDeals.SOUCE,
			name: 'Tomato',
			img: 'img/deals/Tomato.webp',
			description: null,
			price: 0.49,
		},
	},
	{
		info: {
			id: 'Honey mustard',
			type: typeDeals.SOUCE,
			name: 'Honey mustard',
			img: 'img/deals/Honey.webp',
			description: null,
			price: 0.49,
		},
	},
	{
		info: {
			id: 'Ranch',
			type: typeDeals.SOUCE,
			name: 'Ranch',
			img: 'img/deals/Ranch.webp',
			description: null,
			price: 0.49,
		},
	},
];
