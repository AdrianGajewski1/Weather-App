import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"
import { routes } from "../app/app.routes";
import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";

import { WeatherService } from "./shared/services/weather.service";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home-component/home-component";
import { from, fromEventPattern } from "rxjs";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
