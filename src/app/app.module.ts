import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { heroSwitchComponents } from './hero-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    heroSwitchComponents
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
