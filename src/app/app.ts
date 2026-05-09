import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_Learn');
  userName = 'Angular Learner';

  changeName() {
    this.userName = 'Updated Angular Learner';
  }

  ck = false;

  changeCk() {
    this.ck = !this.ck;
  }

  skills = ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript'];

  childMessage: string = 'এখনো কোনো মেসেজ আসেনি...';
  receiveMessage(message: string) {
    this.childMessage = message;
  }
}
