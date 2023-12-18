import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LwxWeatherComponent } from './components/lwx-weather/lwx-weather.component';
import { TopWeatherComponent } from './components/top-weather/top-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    LineChartComponent,
    LwxWeatherComponent,
    TopWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
