import {Component, OnInit} from '@angular/core';
import {Category} from "../model/category.model";
import {catchError, throwError} from "rxjs";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category[] = [];
  categoryAdd = new Category();
  categoryView = new Category();
  categoryEdite = new Category();
  fileErrorMsg: any;

  constructor(private apiServe: ApiService) {
  }

  ngOnInit(): void {
    this.listAllCategories();
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
          this.categoryAdd.image = reader.result;
        };
      }
    }
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

  viewCategory(category: Category) {
    this.categoryView = category;
  }

  saveEditedCategory(category: Category) {
    this.categoryEdite = category;
  }

  saveChanges(category: Category) {
    this.apiServe.updateCategory(category.id, category.name, category.description, category.image)
      .pipe(catchError(error => {
        return throwError(error);
      }))
      .subscribe({
        next: (res) => {
          this.listAllCategories();
        }
      });
  }

  delete(category: Category) {

  }

  saveCategory() {
    this.apiServe.addCategory(this.categoryAdd.name, this.categoryAdd.description, this.categoryAdd.image)
      .pipe(catchError(error => {
        return throwError(error);
      }))
      .subscribe({
        next: (res) => {
          console.log(res);
          this.listAllCategories();
        }
      })
  }
}
