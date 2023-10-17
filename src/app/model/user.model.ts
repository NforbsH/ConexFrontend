export interface IUsers {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  role?: string;
  Orders?: Order[];
  CustomerServices?: CustomerService[];
  Carts?: Cart[];
}

export interface Cart {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  UserId?: number;
  ProductId?: number;
}

export interface CustomerService {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  status?: boolean;
  UserId?: number;
  ServiceId?: null;
}

export interface Order {
  id?: number;
  address?: string;
  created_at?: Date;
  updated_at?: Date;
  status?: string;
  UserId?: number;
}

// export interface IUsers {
//   id?: number;
//   username?: string;
//   email?: string;
//   password?: string;
//   role?: string;
// }

export interface IRole {
  idRole: number;
  role_name: string
}

export class Users implements IUsers {
  Carts?: Cart[];
  CustomerServices?: CustomerService[];
  Orders?: Order[];
  email?: string;
  id?: number;
  password?: string;
  role: string = 'customer';
  username?: string;


  constructor(init?: Partial<Users>) {
    Object.assign(this, init);
  }
}

