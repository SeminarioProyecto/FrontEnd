import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forms-dynamic',
  templateUrl: './dynamic.component.html',
})
export class FormsDynamicComponent implements OnInit {
  form = new FormGroup({});
  model = { Convercion: '1 USD = 0.709801 EUR' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Cambio',
        placeholder: 'Ingrese la cantidad que desea convertir',
      },
    },
   /*  {
      key: 'text2',
      type: 'select',
      templateOptions: {
        label: 'Elija moneda de cambio',
        placeholder: 'This one is disabled if there is no text in the other input',
      },
      expressionProperties: {
        'templateOptions.disabled': '!model.text',
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    }, */
  ];
//aquí van los valores de la api
  selectedCarId = 3;
  cars = [
    { id: 1, name: 'USD ' },
    { id: 2, name: 'EUR' },
    { id: 3, name: 'HNL' },
    { id: 4, name: 'MXN' },
    { id: 5, name: 'JPY' },
    { id: 6, name: 'SVC' },
    { id: 7, name: 'QTR' },
    { id: 8, name: 'CRC' },
    { id: 9, name: 'PAB' },
    { id: 10, name: 'NIO' },
  ];
  constructor(private toastr: ToastrService) {}

  ngOnInit() {}

  submit() {
    this.showToast();
  }

  showToast() {
    this.toastr.success(JSON.stringify(this.model));
  }
}
