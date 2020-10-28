/*
Die Import-Zeilen geben an, welche Module aus dem Angular-Code verwendet werden. 

Das BrowserModule dient dazu, die App zu starten, während das NgModule das "Hauptmodul"
der App ist. 

Forms für Formulare und Http für HTTP-Requests, um Daten zu laden. 

Außerdem wird die Eltern-Komponente namens "AppComponent" geladen, welche alle 
weiteren App-Komponenten als Kind-Komponente enthält, siehe unter declarations.
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { BookListComponent } from './book-list/book-list.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, InfoBoxComponent, BookListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
