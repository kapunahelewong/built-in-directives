import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../items';

import { Item } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {


  // @Input() item: Items;
  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
