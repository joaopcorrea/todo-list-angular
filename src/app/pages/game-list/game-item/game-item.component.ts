import { Component, Input, OnInit } from '@angular/core';
import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  @Input() game: Game = {
    title: 'Título do Jogo',
    imageUrl: '',
    price: 0,
    discountPercentage: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
