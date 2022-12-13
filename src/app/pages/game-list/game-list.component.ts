import { Component, Input, OnInit } from '@angular/core';

import { GameService } from './../../services/game.service';
import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  
  public gameState: Game = new Game('Sem título');

  gameList: Game[] = [];

  constructor(public gameService: GameService) {}

  @Input() searchValue = "";

  ngOnInit(): void {
    this.gameList = this.gameService.getGames();
    this.gameState = window.history.state.game;
  }
}
