import { Component, OnInit } from '@angular/core';
import { Items } from './items';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  canSave =  true;
  isSpecial = true;
  isUnchanged = true;

  currentClasses: {};
  currentStyles: {};
  currentItem = {
    name: 'Lamp'
  };


  isActive = true;
  nullCustomer = null;
  currentCustomer = {
    name: 'Laura'
  };

  items = [
    {name: 'vase', id: 1 },
    {name: 'potted plant', id: 2 },
    {name: 'phone', id: 3 },
    {name: 'tv', id: 4 }
  ];
  hero: Hero; // defined to demonstrate template context precedence
  heroes: Hero[];

  currentHero: Hero;


  // trackBy change counting
  heroesNoTrackByCount   = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;
  heroIdIncrement = 1;

  ngOnInit() {
    this.resetHeroes();
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setUppercaseName(name: string) {
    this.currentItem.name = name.toUpperCase();
  }


  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special':  this.isSpecial
    };
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  isActiveToggle() {
    this.isActive = !this.isActive;
  }

  giveNullCustomerValue() {
    console.log(this.nullCustomer);
    !(this.nullCustomer = null) ? (this.nullCustomer = 'Knut') : (this.nullCustomer = null);
    console.log(this.nullCustomer);
  }

  resetNullItem() {
    this.nullCustomer = null;
  }


  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
    this.heroesWithTrackByCountReset = 0;
  }

  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }

  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }

  trackByHeroes(index: number, hero: Hero): number { return hero.id; }

  trackById(index: number, item: any): number { return item['id']; }



}



