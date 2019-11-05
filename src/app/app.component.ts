import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roman-numerals';
  number: any;
  roman: any;
  error: any;
  numberToRoman() {
    this.roman = "";
    this.error= '';
    const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
    let a;
    if(this.number > 3999)
    this.error = "Enter a number between 1 and 3999";
    else{
      for(let key in romanNumList){
          a = Math.floor(this.number / romanNumList[key]);
          if(a >= 0){
              for(let i = 0; i < a; i++){
                this.roman += key;
              }
            }
          this.number = this.number % romanNumList[key];
      }
    }  
  }
}
