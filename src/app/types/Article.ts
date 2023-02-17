export class Article {
    id: number
    price: number
    stock: number
    name: string
    description: string

    constructor(id?: number, price?: number, stock?: number, name?: string, description?: string) {
        this.id = id || 0;
        this.price = price || 0;
        this.stock = stock || 0;
        this.name = name || '';
        this.description = description || '';
    }

    static empty(): Article {
        return new Article();
    }
}