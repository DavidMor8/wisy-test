import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weatherservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lwx-weather',
  templateUrl: './lwx-weather.component.html',
  styleUrls: ['./lwx-weather.component.css']
})
export class LwxWeatherComponent  implements OnInit{

  weatherData: any; 

  constructor(
    private weatherService: WeatherService,
     private router: Router) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeatherForecast('LWX/31,80').subscribe((data) => {
      if (data && data.properties && data.properties.periods && Array.isArray(data.properties.periods)) {
        this.weatherData = data;
      } else {
        console.error('La respuesta del servicio no tiene la estructura esperada');
      }
    });
  }


getChartData(periods: any[]): any {
  const dates = periods.map((period: any) => new Date(period.startTime).toLocaleDateString());
  const temperatures = periods.map((period: any) => period.temperature);

  return {
    data: {
      labels: dates,
      datasets: [
        {
          label: 'Temperatures',
          data: temperatures,
        
          borderColor: 'white',
          fill: true,
        },
      ],
    },
    options: {
      maintainAspectRatio: true, 
      responsive: true,
      scales: {
        x: {
         
          ticks: {
            color: 'white', 
          },
          
        },
        y: {
         
          ticks: {
            color: 'white', 
          },
          plugins: {
      
            legend: {
              display: false 
            },
            layout: {
              padding: {
                top: 20
              }
            }
          },
          
  
    }
      }
    }
  };
  

}

getTemperatureList(periods: any[]): number[] {
  if (!periods || !Array.isArray(periods)) {
    return [];
  }

  return periods.map((period: any) => period.temperature || 0);

}

getNumberValues(periods: any[]): number[] {
  if (!periods || !Array.isArray(periods)) {
    return [];
  }

  return periods.map((period: any) => period.number || 0);
}


goToHomePage(): void {
  this.router.navigate(['/']); 
}

}
