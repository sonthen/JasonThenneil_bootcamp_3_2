import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { APIService} from './service/api.service';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrandComponent } from './brand/brand.component';
import { RoomListComponent } from './room-list/room-list.component';
import { DetailKamarComponent } from './detail-kamar/detail-kamar.component';
import { HomeComponent } from './home/home.component';
import { ReservasiComponent } from './reservasi/reservasi.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    BrandComponent,
    RoomListComponent,
    DetailKamarComponent,
    HomeComponent,
    ReservasiComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'user', component: UserComponent}
    ])

  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
