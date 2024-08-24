import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, AppNavbar, HeaderComponent, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAngularApp';
  isDisabled : boolean = false

  userName = 'krish'

  users: Array<string> = ['john', 'krish', 'jean' ,'dave']

  keyupFiltering (user: HTMLInputElement){
    console.log(user.value);
    
  }

  addUser (){
    let user = 'kartik'
    this.users.push(user)
  }

  deleteUser (i : number){
    this.users.splice(i,1)
  }
}
