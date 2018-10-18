import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../items';

import { Hero } from '../hero';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {


  @Input() item: Items;
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
