import { Product } from './Product';
export class Category {
    constructor(
        public category: string,
        public products?: Product[],
        public id?: number,
    ) { }
}