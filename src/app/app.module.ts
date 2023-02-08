import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniqueArrayComponent } from './unique-array/unique-array.component';
import { CategoryTreeComponent } from './category-tree/category-tree.component';
import { PrinterComponent } from './printer/printer.component';

@NgModule({
  declarations: [
    AppComponent,
    UniqueArrayComponent,
    CategoryTreeComponent,
    PrinterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
