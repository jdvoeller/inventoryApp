import { ItemType } from './item-type';

export interface IItem {
	name: string,
	id: string,
	type: ItemType,
	description: string,
	available: boolean,
	quantity: number,
	expirationDate: Date,
}
