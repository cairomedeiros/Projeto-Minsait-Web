import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Pages/home/home.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
