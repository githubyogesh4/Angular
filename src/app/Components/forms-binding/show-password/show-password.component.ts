import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent implements OnInit {
  public InputType: string = 'password';

  constructor() { }

  ngOnInit(): void {
  }
  ShowPassword() {

    this.InputType === 'password' ? this.InputType = 'text':this.InputType = 'password';
//     if (this.InputType === 'password')
//       this.InputType = 'text';
//     else
//       this.InputType = 'password';
    
  }
}
