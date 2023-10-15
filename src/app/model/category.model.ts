export interface ICategory {
  id?: number;
  name?: string;
  description?: string;
  image?: string;
  created_at?: Date; // Make this optional if it can be omitted
}

export class Category implements ICategory {
  id?: number;
  name?: string;
  description?: string;
  image?: string;
  created_at?: Date;

  constructor(init?: Partial<Category>) {
    Object.assign(this, init);
  }
}
