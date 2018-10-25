import { Component, OnInit } from '@angular/core';
import { Item } from './item';

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
  isActive = true;
  nullCustomer = null;
  currentCustomer = {
    name: 'Laura'
  };

  item: Item; // defined to demonstrate template context precedence
  items: Item[];

  currentItem: Item;


  // trackBy change counting
  itemsNoTrackByCount   = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;

  ngOnInit() {
    this.resetItems();
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


  resetItems() {
    this.items = Item.items.map(item => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
    this.itemsWithTrackByCountReset = 0;
  }

  changeIds() {
    this.resetItems();
    this.items.forEach(h => h.id += 10 * this.itemIdIncrement++);
    this.itemsWithTrackByCountReset = -1;
  }

  clearTrackByCounts() {
    const trackByCountReset = this.itemsWithTrackByCountReset;
    this.resetItems();
    this.itemsNoTrackByCount = -1;
    this.itemsWithTrackByCount = trackByCountReset;
    this.itemIdIncrement = 1;
  }

  trackByItems(index: number, item: Item): number { return item.id; }

  trackById(index: number, item: any): number { return item['id']; }

}



