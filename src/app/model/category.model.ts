export interface ICategory {
  id?: number;
  name?: string;
  description?: string;
  image?: any;
  created_at?: Date;
  Products?: Product[];
}

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  CategoryId?: number;
}

export class Category implements ICategory {
  Products?: Product[];
  created_at?: Date;
  description?: string;
  id?: number;
  image?: any;
  name?: string;


  constructor(init?: Partial<Category>) {
    Object.assign(this, init)
  }
}
