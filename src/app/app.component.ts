import { Component, OnInit } from '@angular/core';

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
  nullItem = null;

  ngOnInit() {
    // this.resetHeroes();
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

  giveNullItemValue() {
    this.nullItem = 'I exist!';
  }

}



