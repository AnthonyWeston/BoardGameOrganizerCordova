import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.css']
})
export class BoardGameComponent implements OnInit {
  @Input() boardGame: any;
  @Input() notesDisabled: boolean;
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.notesDisabled = true;
  }

  delete() {
    this.deleted.emit('deleted');
  }

  toggleNotesDisabled() {
    this.notesDisabled = !this.notesDisabled;
    console.log(this.notesDisabled);
  }

}
