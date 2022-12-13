import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Game from 'src/app/models/Game';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  // @Input() game: Game = new Game('Sem título');
  // @Input() title: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, game: Game }) { }
}
