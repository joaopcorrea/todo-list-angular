import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from './../../shared/dialog/dialog.component';
import { GameService } from './../../services/game.service';
import Game from 'src/app/models/Game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  public game: Game = new Game('Sem título');
  salePrice: number = 0;
  
  constructor(private dialog: MatDialog, private gameService: GameService, public router: Router) {}

  ngOnInit(): void {
    this.game = window.history.state.game;
    this.salePrice = this.game.price - (this.game.price * this.game.discountPercentage / 100) - 0.01;
  }

  openDialog() {
      this.dialog.open(DialogComponent, { 
        data: { title: 'Atualizar Jogo', game: this.game } 
      });
  }

  removeGame() {
    this.gameService.deleteGame(this.game.id);
    alert('Jogo removido com sucesso!');
    this.router.navigate(['home']);
  }
}
