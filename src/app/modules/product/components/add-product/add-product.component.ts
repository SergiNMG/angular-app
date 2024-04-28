import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/interfaces/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductForm!: FormGroup;
  submitted: boolean = false;
  newProduct!: Product;
  formValue: any;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService) { }

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      id: 10,
      name: [null, [Validators.required, Validators.minLength(4)]],
      price: [null, [Validators.required, Validators.min(1), Validators.max(999)]],
      currency: '$',
      rating: 3,
      description: [null, [Validators.required, Validators.maxLength(350), this.noSpecialCharacters]],
      favorite: false,
      similarProducts: [],
      reviews: null
    });
    console.log(this.addProductForm.invalid);
  }

  addProductInfo() {
    this.formValue = this.addProductForm.value;
  }

  validateField(field: string): boolean {
    return (
      this.addProductForm.controls[field].invalid &&
      this.addProductForm.controls[field].touched
    )
  }

  noSpecialCharacters(control: AbstractControl): ValidationErrors | null {
    const value = (/^[[a-zA-Z0-9\s.,-]*$/).test(control.value);
    return value ? null : { 'noSpecialCharacters': true };
  }

  submitForm() {
    this.submitted = true;
    if (this.addProductForm.valid) {
      this.addProduct();
    }
  }

  private addProduct() {
    this.newProduct = this.addProductForm.value;
    this.productService.addProduct(this.newProduct);
  }
}
