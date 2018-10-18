export class Hero {
  static nextId = 0;

  static heroes: Hero[] = [
    new Hero(
      null,
      'Teapot',
      'short and stout',
      new Date(1970, 1, 25),
      'http://www.imdb.com/title/tt0065832/',
      325
    ),
    new Hero(1, 'Lamp', 'bright'),
    new Hero(2, 'Phone', 'slim' ),
    new Hero(3, 'Television', 'vintage' ),
    new Hero(4, 'Fishbowl')
  ];


  constructor(
    public id?: number,
    public name?: string,
    public emotion?: string,
    public birthdate?: Date,
    public url?: string,
    public rate = 100,
    ) {
    this.id = id ? id : Hero.nextId++;
  }

  clone(): Hero {
    return Object.assign(new Hero(), this);
  }
}
