import { Component, Input, OnInit } from '@angular/core';

import { GameService } from './../../../services/game.service';
import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  @Input() game: Game = new Game('Sem título')

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  removeGame() {
    if (this.game) this.gameService.deleteGame(this.game.id);
    alert('Jogo removido com sucesso!');
  }

}
