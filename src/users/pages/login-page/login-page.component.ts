import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div>Escolha um Login</div>
      <input type="file" #input>

      <div class="user">
        <img src="">
        <span>Nome usuario 1</span>
        <button (click)="input.click()">
        <img src="./assets/img/Upload.svg" alt="" srcset="">
        </button>
      </div>
      <div class="user">
        <img src="">
        <span>Nome usuario 2</span>
        <button (click)="input.click()">
          <img src="./assets/img/Upload.svg" alt="" srcset="">
        </button>
      </div>

      <div class="user">
        <img src="">
        <span>Nome usuario 3</span>
        <button (click)="input.click()">
        <img src="./assets/img/Upload.svg" alt="" srcset="">
        </button>
      </div>
    </div>
  `,
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
