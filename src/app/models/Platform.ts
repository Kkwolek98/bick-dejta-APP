import { Product } from './Product';
export class Platform {
    constructor(
        public name: string,
        public price: number,
        public product?: Product,
        public items?: number,
        public id?: number,
    ) { }
}