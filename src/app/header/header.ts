import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() titleFromParent: string = 'Default Header';
  @Input() showButton: boolean = false;

  @Output() notifyParent = new EventEmitter<string>();
  sendData() {
    this.notifyParent.emit('Hello parent! I cam from child');
  }
}

