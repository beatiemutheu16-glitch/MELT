import { writable } from 'svelte/store';

type CartItem = {
	name: string;
	description: string;
	price: number;
	image: string;
	quantity: number;
};

export const cart = writable<CartItem[]>([]);