import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
  {path: "navbar", component: NavbarComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "gallery", component: GalleryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
