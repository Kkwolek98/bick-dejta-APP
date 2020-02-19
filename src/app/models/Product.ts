import { Platform } from './Platform';

export class Product {
    constructor(
        public name: string,
        public description: string,
        public imgUrl: string,
        public platforms: Platform[],
        public categories: Category[],
        public id?: number,
    ) { }

}