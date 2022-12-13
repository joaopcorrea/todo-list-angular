import { Component, Input, OnInit } from '@angular/core';
import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  public game: Game = {
    title: 'Título do Jogo',
    imageUrl: '',
    videoUrl: '',
    description: '',
    price: 0,
    discountPercentage: 0
  };

  salePrice: number = 0;
  
  constructor() { 
    
  }

  ngOnInit(): void {
    this.game = window.history.state.game;
    this.salePrice = this.game.price - (this.game.price * this.game.discountPercentage / 100) - 0.01;
  }
}
