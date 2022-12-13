import { GameService } from './../../services/game.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Game from 'src/app/models/Game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @Input() newGame: Game = new Game('');
  @Input() requestType: string = 'add';

  gameForm?: FormGroup;

  constructor(private gameService: GameService, public router: Router) {}

  ngOnInit(): void {
    this.gameForm = new FormGroup({
      title: new FormControl(this.newGame.title),
      description: new FormControl(this.newGame.description),
      imageUrl: new FormControl(this.newGame.imageUrl),
      videoUrl: new FormControl(this.newGame.videoUrl),
      price: new FormControl(this.newGame.price, [
        Validators.required,
        Validators.min(1)
      ]),
      discountPercentage: new FormControl(this.newGame.discountPercentage, [
        Validators.required,
        Validators.min(0),
        Validators.max(100)
      ]),
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
      alert('Jogo adicionado com sucesso!');
    }
    else {
      this.gameService.updateGame(this.newGame.id, this.newGame);
      alert('Jogo atualizado com sucesso!');
    }

    this.router.navigate(['home']);
  }
}
