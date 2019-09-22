import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RsvpFormComponent } from '../app/forms/rsvp-form/rsvp-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MapComponent } from './pages/map/map.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AgmCoreModule } from '@agm/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CountDownComponent } from './pages/count-down/count-down.component';
import { CountdownModule  } from 'ngx-countdown';
import { GalleryComponent } from './pages/gallery/gallery.component';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RsvpFormComponent,
    MapComponent,
    RegistryComponent,
    AboutUsComponent,
    CountDownComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8MNrt7b79Zhhk6mD9Jejn_9bYJTg6-zY'
    }),
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
