import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { SecurityModule } from './security/security.module';
import { TripsModule } from './trips/trips.module';
import { PlacesModule } from './places/places.module';
import { ApiTokenInterceptorService } from './api/api-token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MessagesComponent } from './shared/messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImagesModule } from './images/images.module';


@NgModule({
  declarations: [
    AppComponent,
    DummyPageComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SecurityModule,
    TripsModule,
    PlacesModule,
    BrowserAnimationsModule,
    LeafletModule,
    FormsModule,
    ImagesModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiTokenInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
