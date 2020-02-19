import { Product } from './Product';
export class Platform {
    constructor(
        public name: string,
        public price: number,
        public product: Product,
        public id?: number,
    ) { }
}