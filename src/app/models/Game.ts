export default class Game {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  price: number;
  discountPercentage: number;

  constructor(title: string, descr?: string, imageUrl?: string, videoUrl?: string, price: number = 0, discountPct: number = 0) {
    this.id = Game.getNewId();
    this.title = title;
    this.description = descr;
    this.imageUrl = imageUrl;
    this.videoUrl = videoUrl;
    this.price = price;
    this.discountPercentage = discountPct;
  }

  static getNewId(): number {
    return Date.now();
  }
}