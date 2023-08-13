import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  /* templateUrl: './test.component.html', */
  template: `<div>
    Welcome {{name}}
  </div>

  <!-- WITH INTERPOLATION WE CAN BIND DATA FROM CLASS BY USING{{}} -->
  <h2>{{5+5}}</h2>
  <p>{{"Inter"+"polation"}}</p>
  <p>{{"welcome "+ name}}</p>
  <p>{{name.length}}</p>
  <p>{{name.toUpperCase()}}</p>
  <p>{{gretUser()}}</p>
  <p>{{siteURL}}</p>
  <hr>

  <!-- property binding -->
  <h2>
    <input [id] = "myid" type="text" value="mouse"> <!-- property binding -->
    <input bind-id = "myid" type="text" value="mouse"> <!-- instead of using square bracket we can also use 'bind-'' -->
    <input id = {{myid}} type="text" value="charger">  <!-- interpolation -->
    <!-- why we need property binding if we can bind from interpolation?
    Well, interpolation can only work with string values and it doesn't working with boolean property. for eg: below -->
    <br>
    <input disabled = "false" id = {{myid}} type="text" value="charger"> <!-- interpolation binding doesn't work -->
    <input disabled = "true" id = {{myid}} type="text" value="charger">
    <br>
    <input [disabled] = "false" id = {{myid}} type="text" value="charger"> <!-- property binding works!! -->
    <input [disabled] = "true" id = {{myid}} type="text" value="charger">
    <input bind-disabled = "true" id = {{myid}} type="text" value="charger">
    <input [disabled] = "isDisabled" [id] = "myid" type="text" value="charger">
  </h2>
  <hr>
 <!--  class binding -->
  <h2 class="text-success"> not class binding</h2>
  <h2 [class]="successClass">Class Binding </h2>
  <h2 class="text-special" [class]="successClass">class attribute and class binding in the same tag.</h2>
  <h2 [class.text-danger]="hasError">True or False</h2>
<!-- we can use class binding in multiple classes through 'ngClass' -->
  <h2 [ngClass]="messageClass">Multiple Classes</h2>
  <hr>
  <!-- style binding -->
  <h2 [style.color] = "hasError ? 'red' : 'blue'">Style Binding</h2>
  <h2 [style.color]="highlightColor">Style Binding</h2>
  <h2 [ngStyle]="titleStyles">Multiple styles binding</h2><hr>
  
  <!-- event binding -->
  <button (click)="onClick()">greet</button>
  {{greeting}}<br>
  <button (click)="onButtonClick($event)">click</button><br>
  <button (click)="greeting = 'welcome neerajan'">greet</button><hr>

  <!-- template reference variables -->
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button><hr>

  <!-- two way binding -->
  <input [(ngModel)]="fullname" type="text">
  {{fullname}}
  `,

  /* styleUrls: ['./test.component.css'] */
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }`]
})

export class TestComponent {
public name = "Neerajan";
public myid = "testId";
gretUser(){
  return "Hello "+this.name;
}
public siteURL = window.location.href;

public isDisabled = false;

public hasError = true;
public successClass = "text-success";

public isSuccess = true;
public messageClass = {
  "text=success": !this.hasError, /* false so this class won't be applied */
  "text-danger": this.hasError,   /* true, so this class will be applied */
  "text-special": this.isSuccess  /* true, so this class will be applied */
}

public highlightColor = "orange";
public titleStyles = {
  color : "pink",
  fontStyle : "italic"
} 
public greeting ="";
onClick(){
  console.log('Welcome back.');
  this.greeting = "welcome back to angular";
}
onButtonClick(event : Event){
  console.log(event);
  this.greeting = "The even timestamp is "+ event.timeStamp;
}

logMessage(value : any){
  console.log(value);
}

public fullname ="";

}
