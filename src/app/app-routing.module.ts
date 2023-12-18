import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';
import  { LwxWeatherComponent } from './components/lwx-weather/lwx-weather.component';
import { TopWeatherComponent } from './components/top-weather/top-weather.component';

const routes: Routes = [
  {path: '', component: MainViewComponent },
  {path: 'LWX', component: LwxWeatherComponent },
  {path: 'TOP', component: TopWeatherComponent },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
