import { Injectable } from '@angular/core';
import Game from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gameList: Game[] = [
    {
      id: 1,
      title: 'Ghost Recon Wildlands',
      imageUrl: 'https://cdn1.epicgames.com/hyacinth/offer/GRW_StandardCapsule-1920x1080-62b7dd9ccafb91e4303fb563b93d91589bb7ebf1.jpg',
      videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256664717/movie_max.webm?t=1464356149',
      description: 'Em Tom Clancy\'s Ghost Recon® Wildlands, o cartel de Santa Blanca transformou a linda Bolívia em um perigoso país do narcotráfico, levando-o à falta de leis, ao medo e à violência crescente. Com sua influência corrosiva, o cartel está decidido a levar o país inteiro à ruína. Mas ainda há esperança.\nVocê e sua equipe de elite de Ghosts devem se infiltrar e destruir o cartel mortal para salvar a Bolívia e seu povo do colapso total.\nPassado em um gigantesco mundo aberto, você tem total liberdade de escolha, toda decisão feita afeta o mundo à sua volta. Você decide como jogar.',
      price: 199,
      discountPercentage: 40,
    },
    {
      id: 2,
      title: 'Cyberpunk 2077',
      imageUrl: 'https://preview.redd.it/5jwkksyqv7i81.png?auto=webp&s=9235e383b3e24d90ea9f0a8635a4041e49471500',
      videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256810265/movie_max_vp9.webm?t=1611327385',
      description: 'Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto que se passa em Night City, uma megalópole perigosa onde todos são obcecados por poder, glamour e alterações corporais.',
      price: 200,
      discountPercentage: 0,
    },
    {
      id: 3,
      title: 'Far Cry 6',
      imageUrl: 'https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Landscape_2560x1440-2560x1440-827a9d1823ad230a0ea5a2efc7936370.jpg',
      videoUrl: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4KPXZ2VfKQCU9ZQSitdzBL/a6f26e2de7968ce91069b896d86dc17d/fc6-animal_companions-chorizo-video-v3.mp4',
      description: 'Welcome to Hope County, Montana, home to a fanatical doomsday cult known as Eden’s Gate. Stand up to cult leader Joseph Seed & his siblings, the Heralds, to spark the fires of resistance & liberate the besieged community.',
      price: 200,
      discountPercentage: 0,
    },
    {
      id: 4,
      title: 'Assassins Creed Valhalla',
      imageUrl: 'https://bloguruk.files.wordpress.com/2020/12/assassins-creed-female-eivor-gold-cover.jpg?w=1400',
      videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256917310/movie_max_vp9.webm?t=1669059276',
      description: 'Become a legendary Viking on a quest for glory. Raid your enemies, grow your settlement, and build your political power.',
      price: 219,
      discountPercentage: 20,
    },
    {
      id: 5,
      title: 'Battlefield 2042',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/04/k-1920x1080-featured-image.jpg.adapt.crop191x100.1200w.jpg',
      videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256865281/movie_max_vp9.webm?t=1639657415',
      description: 'Dê as ordens na Temporada 3: Escalada. Battlefield™ 2042 é um jogo de tiro em primeira pessoa que marca o retorno à emblemática All-Out Warfare da franquia.',
      price: 249,
      discountPercentage: 20,
    },
    {
      id: 6,
      title: 'Need for Speed Heat',
      imageUrl: 'https://www.animeunited.com.br/oomtumtu/2020/06/NFS_Heat_cover.jpg',
      videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256786657/movie_max_vp9.webm?t=1591282841',
      description: 'Trabalhe de dia e arrisque tudo à noite em Need for Speed™ Heat Edição Deluxe, um jogo eletrizante de corridas de rua, onde a lei desaparece com o pôr do sol.',
      price: 279,
      discountPercentage: 75,
    },
    {
      id: 7,
      title: 'Destiny 2',
      imageUrl: 'https://emssound.net/wp-content/uploads/2017/09/7620dc06d66021cfc7b162d596301ef2-mobile_header.png',
      videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256919752/movie_max_vp9.webm?t=1670354393',
      description: 'Destiny 2 é um MMO de ação com um mundo único em evolução, que se pode jogar a qualquer hora e em qualquer lugar com os amigos, inteiramente de graça.',
      price: 200,
      discountPercentage: 0,
    },
    {
      id: 8,
      title: 'Dying Light 2',
      imageUrl: 'https://i.imgur.com/H0nLn1i.jpg',
      videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256835424/movie_max_vp9.webm?t=1655204027',
      description: 'O vírus venceu. A civilização voltou à Idade das Trevas. A Cidade, um dos últimos locais dos humanos, está prestes a entrar em colapso. Use sua agilidade e habilidades de combate para sobreviver e transformar o mundo. Suas escolhas fazem a diferença.',
      price: 200,
      discountPercentage: 0,
    },
    {
      id: 9,
      title: 'The Witcher 3',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/13/623/644/the-witcher-the-witcher-3-wild-hunt-geralt-of-rivia-wallpaper-preview.jpg',
      videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256658589/movie_max.webm?t=1528288687',
      description: 'Enquanto a guerra assola todos os Reinos do Norte, você enfrenta o maior conflito de sua vida: ir em busca da criança da profecia, uma arma senciente capaz de alterar o mundo.',
      price: 99.99,
      discountPercentage: 80,
    },
    {
      id: 10,
      title: 'No Mans Sky',
      imageUrl: 'https://505games.com/wp-content/uploads/2021/02/NMS_752x430.jpg',
      videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256881969/movie_max_vp9.webm?t=1653510880',
      description: 'No Man\'s Sky é um jogo de ficção científica de exploração e sobrevivência num universo com geração processual infinita.',
      price: 200,
      discountPercentage: 0,
    },
    {
      id: 11,
      title: 'Fortnite',
      imageUrl: 'https://i0.wp.com/gamingonphone.com/wp-content/uploads/2022/05/Fortnite-Characters-Cover.jpg',
      videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256698790/movie_max.webm?t=1659929753',
      description: 'Fortnite é um jogo eletrônico multijogador online revelado originalmente em 2011, desenvolvido pela Epic Games e lançado como diferentes modos de jogo que compartilham a mesma jogabilidade e motor gráfico de jogo.',
      price: 200,
      discountPercentage: 0,
    },
    {
      id: 12,
      title: 'Battlefield 1',
      imageUrl: 'https://www.showmetech.com.br/wp-content/uploads//2016/05/battlefield-1-capa-2-1024x576.jpg',
      videoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256795873/movie_max_vp9.webm?t=1597019302',
      description: 'Junte-se ao Battlefield e viva o alvorecer da guerra total em partidas multiplayer em equipes, ou através da campanha em imersivas Histórias de Guerra.',
      price: 149,
      discountPercentage: 40,
    },
  ];

  constructor() { }

  getGames(): Game[] {
    return this.gameList;
  }

  addGame(newGame: Game) {
    this.gameList.push(newGame);
  }

  updateGame(id: number, updatedGame: Game) {
    const index = this.gameList.findIndex((task)=> task.id == id);
    if (index == -1) return;
    this.gameList[index] = updatedGame;
  }

  deleteGame(id: number) {
    const index = this.gameList.findIndex((task)=> task.id == id);
    if (index == -1) return;
    this.gameList.splice(index, 1);
  }
}
