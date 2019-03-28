import { Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.css']
})
export class BoardGameComponent implements OnInit {
  @Input() boardGame: any;
  @Input() notesDisabled: boolean;
  @Output() deleted = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.notesDisabled = true;
  }

  delete() {
    const dialogRef = this.dialog.open(DialogDeleteBoardGameComponent, {
      data: {title: this.boardGame.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleted.emit('deleted');
      }
    });

  }

}



@Component({
  selector: 'app-dialog-delete-board-game',
  template: `
    <h1 mat-dialog-title>Delete From Collection</h1>
    <div mat-dialog-content>
      <p>Are you sure you want to delete {{data.title}} from your collection?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancelClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
    </div>
  `,
})

export class DialogDeleteBoardGameComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteBoardGameComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
