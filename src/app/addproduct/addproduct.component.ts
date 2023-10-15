import {Component} from '@angular/core';
import {Products} from "../model/products.model";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  products = new Products();


  saveProduct(){

  }
  saveEditedProduct(){

  }
}
