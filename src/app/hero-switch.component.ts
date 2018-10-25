import { Component, Input } from '@angular/core';
import { Item } from './item';

// @Component({
//   selector: 'app-stout-item',
//   template: `Wow. You like {{item.name}}. What a happy hero ... just like you.`
// })
// export class StoutItemComponent {
//   @Input() item: Item;
// }

@Component({
  selector: 'app-happy-item',
  template: `Wow. You like {{item.name}}. What a happy item ... just like you.`
})
export class HappyItemComponent {
  @Input() item: Item;
}

@Component({
  selector: 'app-sad-item',
  template: `You like {{item.name}}? Such a sad item. Are you sad too?`
})
export class SadItemComponent {
  @Input() item: Item;
}

@Component({
  selector: 'app-confused-item',
  template: `Are you as confused as {{item.name}}?`
})
export class ConfusedItemComponent {
  @Input() item: Item;
}

@Component({
  selector: 'app-unknown-item',
  template: `{{message}}`
})
export class UnknownItemComponent {
  @Input() item: Item;
  get message() {
    return this.item && this.item.name ?
      `${this.item.name} is strange and mysterious.` :
      'Are you feeling indecisive?';
  }
}

export const heroSwitchComponents =
  [ HappyItemComponent, SadItemComponent, ConfusedItemComponent, UnknownItemComponent ];
