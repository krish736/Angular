import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { User } from '../model/user';
import { JokeComponent } from './joke/joke.component';
import { AComponent } from './a/a.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';

interface user{
  name:string,
  status:boolean,
  salary: number,
  number: string,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, JokeComponent, AComponent,B1Component,B2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Angular-App';
  // users:Array<user> = [
  //   {
  //     name: 'krish' , status: true, salary: 60000, number: '0912781367'
  //   },
  //   // {
  //   //   name: 'krishna' , status: false, salary: 50000, number: '0912781367'
  //   // }
  // ] 

  // recievedData(e:User){
  //   const userIndex:number =this.users.findIndex(user=>user.name == e.name)  
  //   this.users[userIndex].salary = e.newSalary
  // }

  // clear(){
  //   this.users = []
  // }
}
