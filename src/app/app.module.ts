import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniMapComponent } from './maps/components/mini-map/mini-map.component';
import { SideMenuComponent } from './maps/components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './maps/layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './maps/pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './maps/pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './maps/pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './maps/pages/zoom-range-page/zoom-range-page.component';
/* import { MapsModule } from './maps/maps/maps.module'; */

@NgModule({
  declarations: [
    AppComponent,
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MapsModule : Lo vamos a querer cargar con LazyLoad
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
