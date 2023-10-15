export interface IProducts {
  id?: number;
  name?: string;
  price?: string;
  describtion?: string;
}

export class Products implements IProducts {
  describtion?: string;
  id?: number;
  name?: string;
  price?: string;

  constructor(init?: Partial<Products>) {
    Object.assign(this, init)
  }
}
