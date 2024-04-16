import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addProductForm: FormGroup = this.formBuilder.group({
    name: [null, Validators.required, Validators.minLength(4)],
    price: [null, Validators.required, [Validators.min(1), Validators.max(999)]],
    description: [null, Validators.required, [Validators.maxLength(350), this.noSpecialCharacters]],
    favorite: false
  });

  formValue: any;

  constructor(private formBuilder: FormBuilder) { }

  addProductInfo() {
    this.formValue = this.addProductForm.value;
  }

  validateField(field: string): boolean {
    return (
      this.addProductForm.controls[field].invalid &&
      this.addProductForm.controls[field].touched
    )
  }

  noSpecialCharacters(control: AbstractControl) {
    if (!/[a-zA-Z0-9]/.test(control.value)) {
      return { 'noSpecialCharacters': true };
    }
    return null;
  }
}
