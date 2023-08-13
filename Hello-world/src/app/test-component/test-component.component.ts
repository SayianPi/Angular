import { Component } from '@angular/core';

@Component({
  /* FIRST WAY-> selector: 'app-test-component', */
  /* SECOND WAY-> selector: '.app-test-component', */
  /* THIRD WAY-> selector: '[app-test-component]', */
  selector: '[app-test-component]',
  /* templateUrl: './test-component.component.html', */
  template: `<div>
                Inline template
              
              
              </div>`,
  /* styleUrls: ['./test-component.component.css'] */
  styles: [ `div {
            color: blue;
            border: 1px solid blue;
            padding: 5px;
                 }`]
})
export class TestComponentComponent {

}
