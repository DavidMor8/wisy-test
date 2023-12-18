import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weatherservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  selectedLocation: string = ''; 
  weatherData: any;
 
  
  constructor(
    private weatherService: WeatherService,
     private router: Router ){}

  ngOnInit(): void {
    
  }


  getWeather(): void {
    if (this.selectedLocation === 'Kansas' || this.selectedLocation === 'Columbia') {
      const location = this.selectedLocation === 'Kansas' ? 'TOP/31,80' : 'LWX/31,80';
      this.weatherService.getWeatherForecast(location).subscribe((data) => {
    
        if (data && data.properties && data.properties.periods && Array.isArray(data.properties.periods)) {
          this.weatherData = data;
          console.log(this.weatherData);
  
    
          if (this.selectedLocation === 'Kansas') {
            this.router.navigate(['/TOP']); 
          } else if (this.selectedLocation === 'Columbia') {
            this.router.navigate(['/LWX']); 
          }
        } else {
          console.error('La respuesta del servicio no tiene la estructura esperada');
        }
      });
    } else {
      console.error('Selecciona una ubicación válida');
    }
  }


}
