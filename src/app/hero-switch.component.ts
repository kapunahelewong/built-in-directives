import { Component, Input } from '@angular/core';
import { Item } from './hero';

// @Component({
//   selector: 'app-stout-item',
//   template: `Wow. You like {{item.name}}. What a happy hero ... just like you.`
// })
// export class StoutItemComponent {
//   @Input() item: Item;
// }

@Component({
  selector: 'app-happy-hero',
  template: `Wow. You like {{item.name}}. What a happy hero ... just like you.`
})
export class HappyHeroComponent {
  @Input() item: Item;
}

@Component({
  selector: 'app-sad-hero',
  template: `You like {{item.name}}? Such a sad hero. Are you sad too?`
})
export class SadHeroComponent {
  @Input() item: Item;
}

@Component({
  selector: 'app-confused-hero',
  template: `Are you as confused as {{item.name}}?`
})
export class ConfusedHeroComponent {
  @Input() item: Item;
}

@Component({
  selector: 'app-unknown-hero',
  template: `{{message}}`
})
export class UnknownHeroComponent {
  @Input() item: Item;
  get message() {
    return this.item && this.item.name ?
      `${this.item.name} is strange and mysterious.` :
      'Are you feeling indecisive?';
  }
}

export const heroSwitchComponents =
  [ HappyHeroComponent, SadHeroComponent, ConfusedHeroComponent, UnknownHeroComponent ];
