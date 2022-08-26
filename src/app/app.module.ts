import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {path:'categorias', component:CategoriasComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'Home', pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,

   
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
