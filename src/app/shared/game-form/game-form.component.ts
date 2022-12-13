import { GameService } from './../../services/game.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @Input() newGame: Game = new Game('Sem título');
  @Input() requestType: string = 'add';

  gameForm?: FormGroup;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameForm = new FormGroup({
      title: new FormControl(this.newGame.title),
      description: new FormControl(this.newGame.description),
      imageUrl: new FormControl(this.newGame.imageUrl),
      videoUrl: new FormControl(this.newGame.videoUrl),
      price: new FormControl(this.newGame.price),
      discountPercentage: new FormControl(this.newGame.discountPercentage),
    });
  }

  onSubmitForm() {
    this.gameForm?.patchValue({
      title: this.gameForm?.controls['title'].value,
      description: this.gameForm?.controls['description'].value,
      imageUrl: this.gameForm?.controls['imageUrl'].value,
      videoUrl: this.gameForm?.controls['videoUrl'].value,
      price: this.gameForm?.controls['price'].value,
      discountPercentage: this.gameForm?.controls['discountPercentage'].value
    })

    this.newGame = {id: this.newGame.id, ...this.gameForm?.value};

    if (this.requestType === 'add') {
      this.gameService.addGame(this.newGame);
    }
    else {
      this.gameService.updateGame(this.newGame.id, this.newGame);
    }
  }
}
