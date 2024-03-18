import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { DishModule } from './dish/dish.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
    DishModule,
    
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
