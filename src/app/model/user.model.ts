export interface IUsers {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
  role?: IRole[];
}

export interface IRole {
  idRole: number;
  role_name: string
}

export class Users implements IUsers {
  created_at?: Date;
  email?: string;
  id?: number;
  name?: string;
  password?: string;
  role?: IRole[];
  updated_at?: Date;

  constructor(init?: Partial<Users>) {
    Object.assign(this, init);
  }
}

