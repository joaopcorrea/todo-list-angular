import { Component, Input } from '@angular/core';
import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent  {
  gameList: Game[] = [
    {
      title: 'Cyberpunk 2077',
      imageUrl: 'https://preview.redd.it/5jwkksyqv7i81.png?auto=webp&s=9235e383b3e24d90ea9f0a8635a4041e49471500'
    },
    {
      title: 'Far Cry 6',
      imageUrl: 'https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Landscape_2560x1440-2560x1440-827a9d1823ad230a0ea5a2efc7936370.jpg'
    },
    {
      title: 'Battlefield 2042',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/04/k-1920x1080-featured-image.jpg.adapt.crop191x100.1200w.jpg'
    },
    {
      title: 'Need for Speed Heat',
      imageUrl: 'https://www.animeunited.com.br/oomtumtu/2020/06/NFS_Heat_cover.jpg'
    },
    {
      title: 'Destiny 2',
      imageUrl: 'https://emssound.net/wp-content/uploads/2017/09/7620dc06d66021cfc7b162d596301ef2-mobile_header.png'
    },
    {
      title: 'Dying Light 2',
      imageUrl: 'https://i.imgur.com/H0nLn1i.jpg'
    },
    {
      title: 'The Witcher 3',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/13/623/644/the-witcher-the-witcher-3-wild-hunt-geralt-of-rivia-wallpaper-preview.jpg'
    },
    {
      title: 'Assassins Creed Valhalla',
      imageUrl: 'https://bloguruk.files.wordpress.com/2020/12/assassins-creed-female-eivor-gold-cover.jpg?w=1400'
    },
    {
      title: 'No Mans Sky',
      imageUrl: 'https://505games.com/wp-content/uploads/2021/02/NMS_752x430.jpg'
    },
    {
      title: 'Fortnite',
      imageUrl: 'https://i0.wp.com/gamingonphone.com/wp-content/uploads/2022/05/Fortnite-Characters-Cover.jpg'
    },
    {
      title: 'Battlefield 1',
      imageUrl: 'https://www.showmetech.com.br/wp-content/uploads//2016/05/battlefield-1-capa-2-1024x576.jpg'
    },
    {
      title: 'Ghost Recon Wildlands',
      imageUrl: 'https://cdn1.epicgames.com/hyacinth/offer/GRW_StandardCapsule-1920x1080-62b7dd9ccafb91e4303fb563b93d91589bb7ebf1.jpg'
    },
  ];

  @Input() searchValue = "";
}
