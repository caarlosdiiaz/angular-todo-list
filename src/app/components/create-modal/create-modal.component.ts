import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'create-modal',
  standalone: true,
  imports: [],
  templateUrl: './create-modal.component.html'
})
export class CreateModalComponent {

  @Output() closeEventEmiter = new EventEmitter();

  onCloseModal() {
    this.closeEventEmiter.emit();
  }

  todo() {
    alert('Todo');
  }
}
