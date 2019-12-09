import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-403',
  template: `
    <error-code
      code="403"
      [title]="'Permiso denegado!'"
      [message]="'No tienes permiso para acceder a esta pagina.'"
    ></error-code>
  `,
})
export class Error403Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
