import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../model/products.model";
import {ApiService} from "../service/api.service";
import {catchError, throwError} from "rxjs";
import {Category} from "../model/category.model";

declare var bootstrap: any;
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @ViewChild('editProductModal') editProductModal: ElementRef | undefined;
  products: Product[] = [];
  category: Category[] = [];
  product = new Product();
  editedProduct = new Product();
  fileErrorMsg: string = '';

  deleteModalStatus: any;
  deleteProduct = new Product();

  constructor(private apiServe: ApiService) {
  }

  ngOnInit(): void {
    this.listAllProducts();
    this.listAllCategories();
  }


  listAllProducts() {

    this.apiServe.listAllProducts()
      .pipe(catchError(error => {
        return throwError(error)
      }))
      .subscribe({
        next: (res) => {
          this.products = res;
        }
      })
  }

  handleUpload($event: any) {
    for (let i = 0; i < $event.target.files.length; i++) {
      const file = $event.target.files[i];
      let filetype = file.type;
      if (filetype != "image/jpeg" && filetype != "image/png") {
        $event.target.value = [];
        this.fileErrorMsg = "Please enter only an image file";
      } else {
        this.fileErrorMsg = "";
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          // this.product.image = reader.result;
        };
      }
    }
  }

  saveProduct() {
    this.apiServe.addProduct(this.product?.name, this.product.price, this.product?.description, this.product?.categoryId)
      .pipe(catchError(error => {
        return throwError(error);
      }))
      .subscribe({
        next: (res) => {
          this.listAllProducts();
          // this.closeModal();
        }
      })
  }

  delete(product: Product) {
    // this.deleteModalStatus = true;
    this.deleteProduct = product;
  }

  deleteProductAPI(id: number) {
    this.closeModal();
    this.deleteModalStatus = false;
    this.apiServe.deleteProduct(id)
      .pipe(catchError(error => {
        return throwError(error);
      }))
      .subscribe({
        next: (res) => {
          this.listAllProducts();
        }
      })
  }

  saveEditedProduct(product: Product) {
    this.editedProduct = product;
  }

  saveChanges(product: Product) {
    this.apiServe.updateProduct(product.id, product.name, product.price, product.description, product.categoryId)
      .pipe(catchError(error => {
        return throwError(error);
      }))
      .subscribe({
        next: (res) => {
          this.listAllProducts();
        }
      })
  }

  viewProduct(product: Product) {

  }

  listAllCategories() {
    this.apiServe.listAllCategories()
      .pipe(catchError(error => {
        return throwError(error)
      }))
      .subscribe({
        next: (res) => {
          this.category = res;
        }
      })
  }


  closeModal() {
    const modalElement = document.getElementById('deleteProductModal'); // Get the modal element by its ID
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement); // Initialize the Bootstrap modal
      modal.hide(); // Close the modal
    }
  }


}
