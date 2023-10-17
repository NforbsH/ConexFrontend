import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from "../model/products.model";
import {Category} from "../model/category.model";
import {Users} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = 'http://192.168.100.11:8000'

  optionHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': `Bearer ${this.get('token')}`
    })
  };

  constructor(private http: HttpClient) {
  }

  login(email?: string, password?: string) {
    return this.http.post<any>(`${this.baseURL}/users/login`, {
      email, password
    }, this.optionHeader);
  }

  clear(): void {
    localStorage.clear();
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  register(username?: string, email?: string, password?: string, role?: string) {
    return this.http.post<Users>(`${this.baseURL}/users/register`, {
      username, email, password, role
    }, this.optionHeader);
  }

  getAllUsers() {
    return this.http.get<Users[]>(`${this.baseURL}/users/listAllUsers`, this.optionHeader)
  }

  forgotpassword(email: any, password: any, firstname: any, lastname: any) {
    return this.http.put<any>(this.baseURL + "update", [firstname, lastname, email, password]).pipe();
  }


  public listAllCategories() {
    return this.http.get<Category[]>(`${this.baseURL}/api/c/listAllCategories`, this.optionHeader)
  }

  public searchCategory(id: number) {
    return this.http.get<Category[]>(`${this.baseURL}/api/c/searchCategory/${id}`, this.optionHeader)
  }

  public addCategory(name?: string, description?: string, image?: string) {
    return this.http.post<Category>(`${this.baseURL}/api/c/category`, {
      name, description, image
    }, this.optionHeader)
  }


  public updateCategory(id?: number, name?: string, description?: string, image?: string) {
    return this.http.post<Category[]>(`${this.baseURL}/api/c/category/${id}`, {
      name, description, image
    }, this.optionHeader)
  }

  public deleteCategory(id: number) {
    return this.http.delete<Category[]>(`${this.baseURL}/api/c/deleteCategory/${id}`, this.optionHeader)
  }

  public listAllProducts() {
    return this.http.get<Product[]>(`${this.baseURL}/api/p/listAllProducts`, this.optionHeader)
  }

  public addProduct(name?: string, price?: number, description?: string, categoryId?: number) {
    return this.http.post<Product>(`${this.baseURL}/p/product`, {
      name, description, categoryId, price
    }, this.optionHeader)
  }

  public updateProduct(id?: number, name?: string, price?: number, description?: string, categoryId?: number) {
    return this.http.put<Product>(`${this.baseURL}/api/p/updateProduct/${id}`, {
      name, description, categoryId, price
    }, this.optionHeader)
  }

  public deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.baseURL}/api/c/deleteProduct/${id}`, this.optionHeader)
  }
}
