import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService){

  }
  
  cityName: string = 'wellington';
  weatherData?: weatherData;

  ngOnInit(): void{
    this.getweatherData(this.cityName);
  }

  onSubmit(){
    this.getweatherData(this.cityName);
    this.cityName = '';
  }

  public getweatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    }); 
  }
  //title = 'ProjetAgular';
}
