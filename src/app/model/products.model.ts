export interface IProduct {
  id?: number;
  name?: string;
  price: number;
  description?: string;
  categoryId?: number;
}

export class Product implements IProduct {
  categoryId?: number;
  description?: string;
  id: number = 1;
  name?: string;
  price: number = 1000;

  constructor(init?: Partial<Product>) {
    Object.assign(this, init)
  }
}
