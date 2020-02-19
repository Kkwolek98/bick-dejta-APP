import { Platform } from './Platform';
import { Category } from './Category';

export class Product {
    constructor(
        public name: string,
        public description: string,
        public imgUrl?: string,
        public platforms?: Platform[],
        public categories?: Category[],
        public id?: number,
    ) { }

}