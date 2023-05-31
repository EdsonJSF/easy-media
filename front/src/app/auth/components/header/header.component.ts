import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="text-center d-flex flex-column align-items-center gap-2">
      <h2 class="m-0 fw-bolder text-white">Easy Media</h2>
      <h6 class="m-0 fw-bold text-success">Now, share is easy</h6>
      <h5 class="m-0 fw-normal text-white">{{ text }}</h5>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  @Input() text: string = '';
}
