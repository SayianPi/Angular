import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
/*   templateUrl: './test.component.html', */
template: `
<h1>
    STRUCTURAL BINDING
</h1><hr>




<h2 *ngIf="displayName">
  Angular 
</h2>
<!-- ******************************** -->
<h2 *ngIf="displayName; else elseBlockk">
  Name is not hidden 
</h2>
<ng-template #elseBlockk>
  <h2>
    Name is hidden
  </h2>
</ng-template>

<!-- ********************************** -->
<!-- if displayName is true then 'thenBlock' esle 'elseBlock' -->
<div *ngIf="displayName; then thenBlock; else elseBlockh"></div>
<ng-template #thenBlock>
  <h2> content is not hidden from the inspector </h2>
</ng-template>
<ng-template #elseBlockh>
  <h2> content is hidden from the inspector</h2>
</ng-template>
`,

  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public displayName = false;

}
