// export interface IUsers {
//   id?: number;
//   name?: string;
//   email?: string;
//   password?: string;
//   created_at?: Date;
//   updated_at?: Date;
//   role?: IRole[];
// }
export interface IUsers {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  role?: string;
}

export interface IRole {
  idRole: number;
  role_name: string
}

export class Users implements IUsers {
  email?: string;
  id?: number;
  password?: string;
  role: string ='customer';
  username?: string;

  constructor(init?: Partial<Users>) {
    Object.assign(this, init);
  }
}

