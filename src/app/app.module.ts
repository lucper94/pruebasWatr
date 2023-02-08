import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniqueArrayComponent } from './components/unique-array/unique-array.component';
import { PrinterComponent } from './components/printer/printer.component';

@NgModule({
  declarations: [
    AppComponent,
    UniqueArrayComponent,
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
